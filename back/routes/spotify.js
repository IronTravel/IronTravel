const express = require("express");
const querystring = require('querystring');
const router = express.Router();
const axios = require('axios');

//Models
const User = require("../models/User");

//Lib
const { isLoggedIn } = require('../lib');

const scopes = process.env.SCOPES_SPOTIFY;
const client_id = process.env.CLIENT_ID_SPOTIFY;
const client_secret = process.env.CLIENT_SECRET_SPOTIFY
const redirect_uri = process.env.REDIRECT_URI_SPOTIFY;
const grant_type = process.env.GRANT_TYPE_SPOTIFY;

// SPOTIFY
router.get("/", isLoggedIn(), (req, res) => {

    res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + client_id +
        '&show_dialog=false' +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent(redirect_uri));
});

router.get("/callback", isLoggedIn(), async (req, res) => {

    // Get Token
    const spotifyToken = await axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + new Buffer(`${client_id}:${client_secret}`).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: querystring.stringify({ grant_type: grant_type, code: req.query.code, redirect_uri: redirect_uri }),
        responseType: 'json'
    });

    // Get User Data
    const spotifyUserData = await axios({
        method: 'get',
        url: `https://api.spotify.com/v1/me`,
        headers: { 'Authorization': `Bearer ${spotifyToken.data.access_token}` }
    });

    // Save User
    await User.findByIdAndUpdate(req.user._id, {
        spotify: {
            user_id: spotifyUserData.data.id,
            code: req.query.code,
            token: spotifyToken.data.access_token
        }
    });

    // Redirect to Front
    res.redirect(`${process.env.FRONT_URL}/travel`);
});


// Get Recently Played
router.get("/recentlyplayed/:limit", isLoggedIn(), async (req, res) => {

    const { id } = req.user;
    const { limit } = req.params;
    const currentUser = await User.findById(id);

    try {
        const recentlyPlayed = await axios({
            url: `https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`,
            headers: { 'Authorization': `Bearer ${currentUser.spotify.token}` },
            transformResponse: [(data) => {
                let transformedData = JSON.parse(data);

                return transformedData.items.map(item => {
                    return {
                        "spotify_id": item.track.id,
                        "song": item.track.name,
                        "artists": item.track.artists.map(artist => artist.name).join(', '),
                        "duration_ms": item.track.duration_ms,
                        "image": item.track.album.images[0].url,
                        "played_at": item.played_at,
                        "spotify_url": item.track.external_urls.spotify,
                        "preview_url": item.track.preview_url
                    }
                })
            }],
        });

        res.json(recentlyPlayed.data);

    } catch (error) {
        res.status(401).json({ status: 'Token expired' });
    }
});

module.exports = router;
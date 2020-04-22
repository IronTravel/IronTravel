const express = require("express");
const querystring = require('querystring');
const router = express.Router();
const axios = require('axios');

//Models
const User = require("../models/User");
const Travel = require("../models/Travel");

//Lib
const { isLoggedIn } = require('../lib');

const app_id = process.env.APP_ID_INSTAGRAM;
const client_secret = process.env.CLIENT_SECRET_INSTAGRAM
const grant_type = process.env.GRANT_TYPE_INSTAGRAM;
const redirect_uri = process.env.REDIRECT_URI_INSTAGRAM;
const scopes = process.env.SCOPES_INSTAGRAM;

let travelID;

// INSTAGRAM
router.get("/", isLoggedIn(), (req, res) => {

    const { travel_id } = req.query;
    travelID = travel_id;

    res.redirect('https://api.instagram.com/oauth/authorize/' +
        '?client_id=' + app_id +
        '&redirect_uri=' + encodeURIComponent(redirect_uri) +
        '&response_type=code' +
        '&scope=' + encodeURIComponent(scopes));
});

router.get("/callback", isLoggedIn(), async (req, res) => {

    const { id } = req.user;
    const currentUser = await User.findById(id);

    // Get Token
    const instagramData = await axios({
        method: 'post',
        url: 'https://api.instagram.com/oauth/access_token',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: querystring.stringify({
            "client_id": app_id,
            "client_secret": client_secret,
            "grant_type": grant_type,
            "redirect_uri": redirect_uri,
            "code": req.query.code,
        }),
        responseType: 'json'
    });

    // Get Long lasting Token
    // const instagramLongLastingToken = await axios({
    //     method: 'post',
    //     url: 'https://graph.instagram.com/access_token',
    //     headers: { 'content-type': 'application/x-www-form-urlencoded' },
    //     data: querystring.stringify({
    //         "grant_type": "ig_exchange_token",
    //         "client_secret": client_secret,
    //         "access_token": instagramToken.data.access_token
    //     }),
    //     responseType: 'json'
    // });

    // Get User Data
    // const instagramUserData = await axios({
    //     method: 'get',
    //     url: `https://api.spotify.com/v1/me`,
    //     headers: { 'Authorization': `Bearer ${spotifyToken.data.access_token}` }
    // });

    // Save User
    await User.findByIdAndUpdate(req.user._id, {
        instagram: {
            user_id: instagramData.data.user_id,
            code: req.query.code,
            token: instagramData.data.access_token
        }
    });

    // Save Entries
    const recentPosts = await axios({
        url: `https://graph.instagram.com/me/media?fields=caption,children,comments,comments_count,id,ig_id,is_comment_enabled,like_count,media_type,media_url,owner,permalink,shortcode,thumbnail_url,timestamp,username&access_token=${instagramData.data.access_token}`,
        transformResponse: [(data) => {
            let transformedData = JSON.parse(data);

            return transformedData.data.map(item => {
                return {
                    "instagram_id": item.id,
                    "caption": item.caption,
                    "media_type": item.media_type,
                    "image": item.media_url,
                    "permalink": item.permalink,
                    "posted_at": item.timestamp
                }
            })
        }],
    });

    let entries = recentPosts.data.map(entry => {
        return {
            type: 'instagram',
            content: entry
        }
    })

    await Travel.findByIdAndUpdate(travelID, { $addToSet: { entries } })

    // Redirect to Front
    res.redirect(`${process.env.FRONT_URL}/travel/${travelID}`);
});

// Get Media
router.get("/recentposts/", isLoggedIn(), async (req, res) => {

    const { id } = req.user;
    const currentUser = await User.findById(id);

    try {
        const recentPosts = await axios({
            url: `https://graph.instagram.com/me/media?fields=caption,children,comments,comments_count,id,ig_id,is_comment_enabled,like_count,media_type,media_url,owner,permalink,shortcode,thumbnail_url,timestamp,username&access_token=${currentUser.instagram.token}`,
            transformResponse: [(data) => {
                let transformedData = JSON.parse(data);

                return transformedData.data.map(item => {
                    return {
                        "instagram_id": item.id,
                        "caption": item.caption,
                        "media_type": item.media_type,
                        "image": item.media_url,
                        "permalink": item.permalink,
                        "posted_at": item.timestamp
                    }
                })
            }],
        });

        let entries = recentPosts.data.map(entry => {
            return {
                type: 'instagram',
                content: entry
            }
        })

        await Travel.findByIdAndUpdate(travelID, { $addToSet: { entries } })
        const travel = await Travel.findById(travelID)

        res.json(travel.entries);

    } catch (error) {
        res.status(401).json({ status: 'Token expired' });
    }
});


module.exports = router;
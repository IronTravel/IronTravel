const MusicGenre = require("../models/MusicGenre");
const axios = require("axios");
const { withDbConnection, dropIfExists, getSpotityToken } = require("../lib");

getSpotityToken().then(result => {
    const accessToken = result.data.access_token;

    axios({
        method: "get",
        url: "https://api.spotify.com/v1/recommendations/available-genre-seeds",
        headers: {
            Authorization: "Bearer " + accessToken,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        responseType: "json"
    })
        .then(response => {
            const genreNames = response.data.genres;

            withDbConnection(async () => {
                await dropIfExists(MusicGenre);
                await MusicGenre.create(
                    genreNames.map(name => {
                        return { name };
                    })
                );
            });
        })
        .catch(error => {
            console.log("ERROR: " + error);
        });
});

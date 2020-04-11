require("dotenv").config();
const City = require("../models/City");
const axios = require("axios");
const { withDbConnection } = require("../lib");


withDbConnection(async () => {
    const cities = await City.find();

    for (city of cities) {
        for (restaurant of city.restaurants) {
            try {
                const response = await axios({
                    url: "https://www.googleapis.com/customsearch/v1",
                    params: {
                        key: process.env.KEY_GOOGLE,
                        cx: process.env.CX_GOOGLE,
                        q: restaurant.name,
                        searchType: "image",
                        fileType: "jpg",
                        cr: true,
                        alt: "json"
                    }
                });

                restaurant.photos = response.data.items[0].link;

            } catch (error) {
                console.log(error);
                break;
            }
        }

        await City.findByIdAndUpdate(city._id, city);
    }
});

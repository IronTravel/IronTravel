require("dotenv").config();
const Restaurant = require("../models/Restaurant");
const axios = require("axios");
const { withDbConnection } = require("../lib");

withDbConnection(async () => {
    const restaurants = await Restaurant.find({ images: { $exists: false } });
    let restaurantCount = 0;
        for (restaurant of restaurants) {
            try {
                const response = await axios({
                    url: "https://www.googleapis.com/customsearch/v1",
                    params: {
                        key: process.env.KEY_GOOGLE3,
                        cx: process.env.CX_GOOGLE3,
                        q: restaurant.name,
                        searchType: "image",
                        fileType: "jpg",
                        cr: true,
                        alt: "json"
                    }
                });
                
                if (response.data.items && response.data.items.length && response.data.items[0].link){
                  await Restaurant.findByIdAndUpdate(restaurant._id, 
                      restaurant.images = response.data.items[0].link
                    )
                    await restaurant.save();
                    console.log(`${restaurant.name} restaurant added (${++restaurantCount} of ${restaurants.length})`);
                    continue;
              } else {
                continue;
              }
            } catch (error) {
                console.log(error);
                break;
            }
        }
});
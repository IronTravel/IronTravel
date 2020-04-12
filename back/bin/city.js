require("dotenv").config();
const cheerio = require('cheerio');
const axios = require('axios');

//Models
const City = require("../models/City");

//Lib
const { withDbConnection, dropIfExists} = require("../lib");

//Params
const id = process.env.CLIENT_ID_FOURSQUARE;
const secret = process.env.CLIENT_SECRET_FOURSQUARE;
const v = process.env.VERSION_FOURSQUARE;
const restaurantId = "4d4b7105d754a06374d81259";
const landmarkId = "4bf58dd8d48988d12d941735";
const museumId = "4bf58dd8d48988d181941735";
const sortPopularity = 1;
const limit = 2;

const fixCityName = (text) => {
    if (text.includes("Sao Paolo"))
        return text.replace("Sao Paolo", "Sao Paulo");
    else if (text.includes("Jarkarta"))
        return text.replace("Jarkarta", "Jakarta");
    else
        return text;
}

axios.get('https://www.delicious.com.au/travel/international/gallery/100-cities-deserve-place-travel-bucket-list/o4lzlr69?page=100')
.then(response => {
    const $ = cheerio.load(response.data);
    const items = $('.gallery-slides .slide')
        .map(function () {
            let title = $(this).find('.slide-title').text().trim().split(', ')
            let description = $(this).find('.description').text()
            return {
              name: fixCityName(title.shift()),
              country: title.pop(),
              description: fixCityName(description),
              image: $(this).find("img").attr("data-src") || $(this).find("img").attr("src"),
            };
        }).get()
        withDbConnection(async () => {
            await dropIfExists(City);
            await City.create(
                items.map(element => {
                    return element
                }))

                
                // const cities = await City.find();
                // let cityCount = 0;
              
                // for (city of cities) {
                //   try {
                //     const restaurantsRequest = await axios.get(
                //       `https://api.foursquare.com/v2/venues/explore/?client_id=${id}&client_secret=${secret}&v=${v}&categoryId=${restaurantId}&sortByPopularity=${sortPopularity}&near=${city.name}&limit=${limit}`
                //     );
              
                //     await City.findByIdAndUpdate(city._id, {
                //       restaurants: restaurantsRequest.data.response.groups.map((e) =>
                //         e.items.map((i) => i.venue)
                //       ).pop(),
                //     });
              
                //     const landmarkRequest = await axios.get(
                //       `https://api.foursquare.com/v2/venues/explore/?client_id=${id}&client_secret=${secret}&v=${v}&categoryId=${landmarkId}&sortByPopularity=${sortPopularity}&near=${city.name}&limit=${limit}`
                //     );
                    
                //     await City.findByIdAndUpdate(city._id, {
                //       landmarks: landmarkRequest.data.response.groups.map((e) =>
                //         e.items.map((i) => i.venue)
                //       ).pop(),
                //     });
              
                //     const museumRequest = await axios.get(
                //       `https://api.foursquare.com/v2/venues/explore/?client_id=${id}&client_secret=${secret}&v=${v}&categoryId=${museumId}&sortByPopularity=${sortPopularity}&near=${city.name}&limit=${limit}`
                //     );
              
                //     await City.findByIdAndUpdate(city._id, {
                //       museums: museumRequest.data.response.groups.map((e) =>
                //         e.items.map((i) => i.venue)
                //       ).pop(),
                //     });
              
                //     console.log(`${city.name} restaurants, landmarsk and museums added (${++cityCount} of ${cities.length})`);
              
                //   } catch (error) {
                //     console.log(
                //       error.response.status,
                //       error.response.statusText,
                //       `${city.name} (${++cityCount} of ${cities.length})`
                //     );
                //     break;
                //   }
                // }
            })
})

require("dotenv").config();
const axios = require("axios");

//Models
const City = require("../models/City");
const Restaurant = require("../models/Restaurant");

//Lib
const { withDbConnection, dropIfExists } = require("../lib");

//Params
const id = process.env.CLIENT_ID_FOURSQUARE;
const secret = process.env.CLIENT_SECRET_FOURSQUARE;
const v = process.env.VERSION_FOURSQUARE;
const restaurantId = "4d4b7105d754a06374d81259";
const sortPopularity = 1;
const limit = 3;

withDbConnection(async () => {
await dropIfExists(Restaurant);
  let cities = await City.find();
  let cityCount = 0;

  cities = cities.slice(0,1);

  for (city of cities) {
    try {
        console.log(city.name)
      const response = await axios.get(
        `https://api.foursquare.com/v2/venues/explore/?client_id=${id}&client_secret=${secret}&v=${v}&categoryId=${restaurantId}&sortByPopularity=${sortPopularity}&near=${city.name}&limit=${limit}`
      );
      const createdRestaurant = await Restaurant.create(response.data.response.groups.map((e) => e.items.map((i) => i.venue)).pop())
      const updatedCity = await City.findByIdAndUpdate(city._id, {
        restaurants: createdRestaurant,
      });
        
      console.log(createdRestaurant)
      console.log("Restaurante ID", updatedCity);
      console.log('Restaurante en ciudad', updatedCity.restaurants[0]);

      console.log(`${city.name} restaurants (${++cityCount} of ${cities.length})`);
    } catch (error) {
      console.log(error)
      console.log(
        error.response.status,
        error.response.statusText,
        `${city.name} (${++cityCount} of ${cities.length})`
      );
      break;
    }
  }
});

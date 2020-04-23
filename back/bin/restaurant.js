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
  const cities = await City.find();
  let cityCount = 0;

  for (city of cities) {
    try {
        console.log(city.name)
      const response = await axios.get(
        `https://api.foursquare.com/v2/venues/explore/?client_id=${id}&client_secret=${secret}&v=${v}&categoryId=${restaurantId}&sortByPopularity=${sortPopularity}&near=${city.name}&limit=${limit}`
      );
      const newRestaurant = await Restaurant.create(response.data.response.groups.map((e) => e.items.map((i) => i.venue)).pop())
      await City.findByIdAndUpdate(city._id, 
        { $addToSet: { restaurants: newRestaurant.map((e) => e._id)} }
      )
      console.log(`${city.name} restaurants (${++cityCount} of ${cities.length})`);
    } catch (error) {
      console.log(
        error.response.status,
        error.response.statusText,
        `${city.name} (${++cityCount} of ${cities.length})`
      );
      break;
    }
  }
});

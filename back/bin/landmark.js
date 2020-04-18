require("dotenv").config();
const axios = require("axios");

//Models
const City = require("../models/City");
const Landmark = require("../models/Landmark");

//Lib
const { withDbConnection, dropIfExists } = require("../lib");

//Params
const id = process.env.CLIENT_ID_FOURSQUARE;
const secret = process.env.CLIENT_SECRET_FOURSQUARE;
const v = process.env.VERSION_FOURSQUARE;
const landmarkId = "4bf58dd8d48988d12d941735";
const sortPopularity = 1;
const limit = 3;

withDbConnection(async () => {
await dropIfExists(Landmark);
  const cities = await City.find();
  let cityCount = 0;

  for (city of cities) {
    try {
        console.log(city.name)
      const response = await axios.get(
        `https://api.foursquare.com/v2/venues/explore/?client_id=${id}&client_secret=${secret}&v=${v}&categoryId=${landmarkId}&sortByPopularity=${sortPopularity}&near=${city.name}&limit=${limit}`
      );
      await Landmark.create(response.data.response.groups.map((e) => e.items.map((i) => i.venue)).pop())
      await City.findByIdAndUpdate(city._id, 
        { $addToSet: { landmarks: response.data.response.groups.map((e) => e.items.map((i) => i.venue.id)).pop() } }
      )
      console.log(`${city.name} landmarks (${++cityCount} of ${cities.length})`);
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

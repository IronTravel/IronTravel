require("dotenv").config();
const axios = require("axios");

//Models
const City = require("../models/City");
const Museum = require("../models/Museum");

//lib
const { withDbConnection, dropIfExists } = require("../lib");

//Params
const id = process.env.CLIENT_ID_FOURSQUARE;
const secret = process.env.CLIENT_SECRET_FOURSQUARE;
const v = process.env.VERSION_FOURSQUARE;
const museumId = "4bf58dd8d48988d181941735";
const sortPopularity = 1;
const limit = 3;

withDbConnection(async () => {
    await dropIfExists(Museum);
    const cities = await City.find();
    let cityCount = 0;

    for (city of cities) {
        try {
            console.log(city.name)
            const response = await axios.get(
                `https://api.foursquare.com/v2/venues/explore/?client_id=${id}&client_secret=${secret}&v=${v}&categoryId=${museumId}&sortByPopularity=${sortPopularity}&near=${city.name}&limit=${limit}`
            );
            await Museum.create(response.data.response.groups.map((e) => e.items.map((i) => i.venue)).pop())
            await City.findByIdAndUpdate(city._id,
                // { $addToSet: { museums: response.data.response.groups.map((e) => e.items.map((i) => i.venue.id)).pop() } }
                { museums: response.data.response.groups.map((e) => e.items.map((i) => i.venue.id)).pop() }
            )
            console.log(`${city.name} museums (${++cityCount} of ${cities.length})`);
        } catch (error) {
            console.log(
                error.response.status,
                error.response.statusText,
                `${city.name} (${++cityCount} of ${cities.length})`
            );
            break;
        }
    }});

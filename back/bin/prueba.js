require("dotenv").config();
const City = require("../models/City");
const axios = require("axios");
const {withDbConnection} = require("../lib");


withDbConnection( async () => {
  const cities = await City.find();
  let templeCount = 0;

  for (city of cities) {
    try {
      const response = await axios({
        url: "https://www.googleapis.com/customsearch/v1",
        params: {
          key: process.env.KEY_GOOGLE,
          cx: process.env.CX_GOOGLE,
          q: `paris`,
          searchType: "image",
          fileType: "jpg",
          cr: true,
          alt: "json"
        }
      });
      console.log(response)
      await City.findByIdAndUpdate(city._id, {
        museums[0].photo = response.data.items[0].link
      });

    }catch (error) {
              console.log(
                error
                
              );
              break;
            }
  }
});

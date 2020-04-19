const {
  withDbConnection,
  dropIfExists,
  hashPassword,
  getRandom
} = require("../lib");
const axios = require("axios");
const User = require("../models/User");
const MusicGenre = require("../models/MusicGenre");

axios({
  method: "get",
  url:
    "https://randomuser.me/api/?results=26&nat=us,es,fr&exc=registered,id,phone,cell,nat,coordinates",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  transformResponse: [
    data => {
      let transformedData = JSON.parse(data);
      return transformedData.results.map(item => {
        return {
          name: item.name.first,
          lastname: item.name.last,
          fullname: `${item.name.first} ${item.name.last}`,
          initials: `${item.name.first[0]} ${item.name.last[0]}`,
          password: hashPassword("123456"),
          gender: item.gender,
          email: item.email,
          dob: item.dob,
          city: item.location.city,
          country: item.location.country,
          avatar: item.picture.large
          // description: String,
          // nationality: String,
          // favourite_color: String,
          // my_hobbies: [{ type: ObjectId, ref: "hobby" }],
          // my_travels: [{ type: ObjectId, ref: "travelProfile" }],
          // my_tours: [{ type: ObjectId, ref: "tour" }],
          // my_places: [{ type: ObjectId, ref: "place" }],
          // about_me: {
          //   music: [{ type: ObjectId, ref: "musicGenres" }],
          //   personality: [{ type: ObjectId, ref: "personality" }],
          //   life_style: [{ type: ObjectId, ref: "lifeStyle" }]
          // }
        };
      });
    }
  ],
  responseType: "json"
}).then(response => {
  withDbConnection(async () => {
    // await dropIfExists(User);

    // const musicgGenres = await MusicGenre.find({});
    // response.data.forEach(user => {
    //   user.about_me.music = getRandom(musicgGenres, 5);
    // });

    await User.create(response.data);
  });
});

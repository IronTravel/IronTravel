const { withDbConnection, dropIfExists, hashPassword, getRandomFromArray, getRandomText } = require("../lib");
const axios = require("axios");
const User = require("../models/User");
const MusicGenre = require("../models/MusicGenre");
const Personality = require("../models/Personality");
const LifeStyle = require("../models/LifeStyle");
const Hobby = require("../models/Hobby");

axios({
    method: "get",
    url: "https://randomuser.me/api/?results=100&nat=us,es,fr&exc=registered,id,phone,cell,nat,coordinates",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    transformResponse: [
        data => {
            let transformedData = JSON.parse(data);
            return transformedData.results.map(item => {
                return {
                    name: item.name.first,
                    lastName: item.name.last,
                    initials: `${item.name.first[0]}${item.name.last[0]}`,
                    password: hashPassword("123456"),
                    gender: item.gender,
                    email: item.email,
                    dob: item.dob,
                    country: item.location.country,
                    avatar: item.picture.large,
                    // my_travels: [{ type: ObjectId, ref: "travelProfile" }],
                    // my_tours: [{ type: ObjectId, ref: "tour" }],
                    // my_places: [{ type: ObjectId, ref: "place" }],
                };
            });
        }
    ],
    responseType: "json"
}).then(response => {
    withDbConnection(async () => {
        await dropIfExists(User);
        await User.create(response.data);

        const users = await User.find();

        const description = await getRandomText();
        const music = await MusicGenre.find();
        const personality = await Personality.find();
        const life_style = await LifeStyle.find();
        const hobbies = await Hobby.find();

        for (user of users) {
            await User.findByIdAndUpdate(user._id, {
                description: description.data.pop(),
                music: getRandomFromArray(music, 5),
                personality: getRandomFromArray(personality, 5),
                life_style: getRandomFromArray(life_style, 5),
                hobbies: getRandomFromArray(hobbies, 5),
                followers: getRandomFromArray(users, Math.floor(Math.random() * 80), true),
                following: getRandomFromArray(users, Math.floor(Math.random() * 80), true)
            });
        }
    });
});

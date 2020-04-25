const { withDbConnection, dropIfExists, hashPassword, getRandomFromArray, getRandomText } = require("../lib");
const axios = require("axios");
const User = require("../models/User");
const MusicGenre = require("../models/MusicGenre");
const Personality = require("../models/Personality");
const LifeStyle = require("../models/LifeStyle");
const Hobby = require("../models/Hobby");

const main_imgs = ["https://content.skyscnr.com/m/747b83ab736f8e6b/original/GettyImages-515722479_doc.jpg?resize=1800px:1800px&#038;quality=100"
    , "https://content.skyscnr.com/7805c7de6f4e7816a4fe0a7cc386969e/GettyImages-183633046.jpg"
    , "https://content.skyscnr.com/e9f18d98773d244ceef7d45bc67f6ef8/GettyImages-523665439.jpg"
    , "https://content.skyscnr.com/28f9e38f288581eea0a2c2cd73016f9e/GettyImages-177102278.jpg"
    , "https://content.skyscnr.com/0fb8578abe113048d7ee9a9873dafe92/GettyImages-176421733.jpg"
    , "https://content.skyscnr.com/73b2d0e7d3be0bb696808efda2ce7227/GettyImages-460860677.jpg"
    , "https://content.skyscnr.com/1fa5a5edc230fb4400ea1faf394e49b3/GettyImages-463497475.jpg"
    , "https://viajes.nationalgeographic.com.es/medio/2017/04/24/sant-petersburgo_2e25e940.jpg"
    , "https://viajes.nationalgeographic.com.es/medio/2017/04/24/isla-de-san-martin_e8e582b8.jpg"
    , "https://viajes.nationalgeographic.com.es/medio/2017/04/24/playa-del-carmen_e282eb30.jpg"
    , "https://viajes.nationalgeographic.com.es/medio/2017/04/24/gran-caiman-islas-caiman_c15a31ba.jpg"
    , "https://viajes.nationalgeographic.com.es/medio/2017/04/24/bora-bora-islas-de-la-sociedad_6007a5de.jpg"
    , "https://viajes.nationalgeographic.com.es/medio/2017/04/24/cuzco-peru_f68afd77.jpg"];

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
                music: getRandomFromArray(music, Math.floor(Math.random() * 15)),
                main_image: getRandomFromArray(main_imgs, 1),
                personality: getRandomFromArray(personality, Math.floor(Math.random() * 12)),
                life_style: getRandomFromArray(life_style, Math.floor(Math.random() * 12)),
                hobbies: getRandomFromArray(hobbies, Math.floor(Math.random() * 12)),
                followers: getRandomFromArray(users, Math.floor(Math.random() * 80), true),
                following: getRandomFromArray(users, Math.floor(Math.random() * 80), true)
            });
        }
    });
});

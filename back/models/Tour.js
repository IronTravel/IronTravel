const mongoose = require("mongoose");

const images =  ["https://content.skyscnr.com/m/139e66b951813eed/original/eyeem_65408921.jpg.jpg?resize=1800px:1800px&#038;quality=100"
,"https://content.skyscnr.com/m/747b83ab736f8e6b/original/GettyImages-515722479_doc.jpg?resize=1800px:1800px&#038;quality=100"
,"https://content.skyscnr.com/7805c7de6f4e7816a4fe0a7cc386969e/GettyImages-183633046.jpg"
,"https://content.skyscnr.com/e9f18d98773d244ceef7d45bc67f6ef8/GettyImages-523665439.jpg"
,"https://content.skyscnr.com/28f9e38f288581eea0a2c2cd73016f9e/GettyImages-177102278.jpg"
,"https://content.skyscnr.com/0fb8578abe113048d7ee9a9873dafe92/GettyImages-176421733.jpg"
,"https://content.skyscnr.com/73b2d0e7d3be0bb696808efda2ce7227/GettyImages-460860677.jpg" 
,"https://content.skyscnr.com/1fa5a5edc230fb4400ea1faf394e49b3/GettyImages-463497475.jpg"
,"https://viajes.nationalgeographic.com.es/medio/2017/04/24/sant-petersburgo_2e25e940.jpg"
,"https://viajes.nationalgeographic.com.es/medio/2017/04/24/isla-de-san-martin_e8e582b8.jpg"
,"https://viajes.nationalgeographic.com.es/medio/2017/04/24/playa-del-carmen_e282eb30.jpg"
,"https://viajes.nationalgeographic.com.es/medio/2017/04/24/gran-caiman-islas-caiman_c15a31ba.jpg"
,"https://viajes.nationalgeographic.com.es/medio/2017/04/24/bora-bora-islas-de-la-sociedad_6007a5de.jpg"
,"https://viajes.nationalgeographic.com.es/medio/2017/04/24/cuzco-peru_f68afd77.jpg"]
const randomImage = images[Math.floor(Math.random() * images.length)];

const Tour = new mongoose.Schema(
    {
        name: String,
        description: String,
        tour_type: String,
        city: String,
        country: { type: mongoose.Schema.ObjectId, ref: "country" },
        tour_partner: { type: mongoose.Schema.ObjectId, ref: "user" },
        organizer: { type: mongoose.Schema.ObjectId, ref: "user" },
        start_date: Date,
        end_date: Date,
        photos: {type: Array, default: [randomImage] },
        start_place: String,
        number_of_people: Number,
        duration: Date,
        rating: Number
    },
    {
        timestamps: true
    }
);



module.exports = mongoose.model("tour", Tour);

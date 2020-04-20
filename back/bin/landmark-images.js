require("dotenv").config();
const Landmark = require("../models/Landmark");
const axios = require("axios");
const { withDbConnection } = require("../lib");

withDbConnection(async () => {
    const landmarks = await Landmark.find({ images: { $exists: false } });
    let landmarkCount = 0;
        for (landmark of landmarks) {
            try {
                const response = await axios({
                    url: "https://www.googleapis.com/customsearch/v1",
                    params: {
                        key: process.env.KEY_GOOGLE9,
                        cx: process.env.CX_GOOGLE9,
                        q: landmark.name,
                        searchType: "image",
                        fileType: "jpg",
                        cr: true,
                        alt: "json"
                    }
                });
                
                if (response.data.items && response.data.items.length && response.data.items[0].link){
                  await Landmark.findByIdAndUpdate(landmark._id, 
                    landmark.images = response.data.items[0].link
                    )
                    await landmark.save();
                    console.log(`${landmark.name} landmark added (${++landmarkCount} of ${landmarks.length})`);
                    continue;
              } else {
                continue;
              }
            } catch (error) {
                console.log(error);
                break;
            }
        }
});
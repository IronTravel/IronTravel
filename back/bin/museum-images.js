require("dotenv").config();
const Museum = require("../models/Museum");
const axios = require("axios");
const { withDbConnection } = require("../lib");


withDbConnection(async () => {
    const museums = await Museum.find({ images: { $exists: false } });
        let museumCount = 0;
        for (museum of museums) {
            try {
                const response = await axios({
                    url: "https://www.googleapis.com/customsearch/v1",
                    params: {
                        key: process.env.KEY_GOOGLE2,
                        cx: process.env.CX_GOOGLE2,
                        q: museum.name,
                        searchType: "image",
                        fileType: "jpg",
                        cr: true,
                        alt: "json"
                    }
                });
                
                if (response.data.items && response.data.items.length && response.data.items[0].link){
                  await Museum.findByIdAndUpdate(museum._id, 
                      museum.images = response.data.items[0].link
                    )
                    await museum.save();
                    console.log(`${museum.name} museums added (${++museumCount} of ${museums.length})`);
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

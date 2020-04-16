// require("dotenv").config();
// const City = require("../models/City");
// const axios = require("axios");

// const { withDbConnection } = require("../lib");

// //Params
// const id = process.env.CLIENT_ID_FOURSQUARE;
// const secret = process.env.CLIENT_SECRET_FOURSQUARE;
// const v = process.env.VERSION_FOURSQUARE;
// const restaurantId = "4d4b7105d754a06374d81259";
// const landmarkId = "4bf58dd8d48988d12d941735";
// const museumId = "4bf58dd8d48988d181941735";
// const sortPopularity = 1;
// const limit = 2;

// withDbConnection(async () => {
//   const cities = await City.find();
//   let cityCount = 0;

//   for (city of cities) {
//     try {
//       const restaurantsRequest = await axios.get(
//         `https://api.foursquare.com/v2/venues/explore/?client_id=${id}&client_secret=${secret}&v=${v}&categoryId=${restaurantId}&sortByPopularity=${sortPopularity}&near=${city.name}&limit=${limit}`
//       );

//       await City.findByIdAndUpdate(city._id, {
//         restaurants: restaurantsRequest.data.response.groups.map((e) =>
//           e.items.map((i) => i.venue)
//         ).pop(),
//       });

//       const landmarkRequest = await axios.get(
//         `https://api.foursquare.com/v2/venues/explore/?client_id=${id}&client_secret=${secret}&v=${v}&categoryId=${landmarkId}&sortByPopularity=${sortPopularity}&near=${city.name}&limit=${limit}`
//       );
      
//       await City.findByIdAndUpdate(city._id, {
//         landmarks: landmarkRequest.data.response.groups.map((e) =>
//           e.items.map((i) => i.venue)
//         ).pop(),
//       });

//       const museumRequest = await axios.get(
//         `https://api.foursquare.com/v2/venues/explore/?client_id=${id}&client_secret=${secret}&v=${v}&categoryId=${museumId}&sortByPopularity=${sortPopularity}&near=${city.name}&limit=${limit}`
//       );

//       await City.findByIdAndUpdate(city._id, {
//         museums: museumRequest.data.response.groups.map((e) =>
//           e.items.map((i) => i.venue)
//         ).pop(),
//       });

//       console.log(`${city.name} restaurants, landmarsk and museums added (${++cityCount} of ${cities.length})`);

//     } catch (error) {
//       console.log(
//         error.response.status,
//         error.response.statusText,
//         `${city.name} (${++cityCount} of ${cities.length})`
//       );
//       break;
//     }
//   }
// });

// withDbConnection(async () => {
//   // get all the Citys from the data base
//   const citiesrestaurant = await City.find();
//   console.log("restaurantes", citiesrestaurant);
//   const citiesmuseum = await City.find({ landmarks: [] });
//   // console.log("museos", citiesmuseum)
//   // get restauran and landmark from the foursQuare and save it in the city
//   if (citiesrestaurant) {
//     //Params Search
//     const id = process.env.CLIENT_ID_FOURSQUARE;
//     const secret = process.env.CLIENT_SECRET_FOURSQUARE;
//     const v = process.env.VERSION_FOURSQUARE;
//     const categoryId = "4d4b7105d754a06374d81259";
//     const sortPopularity = 1;
//     const limit = 2;

//     let cityCount = 0;
//     for (city of citiesrestaurant) {
//       console.log(city.name);
//       try {
//         const response = await axios.get(
//           `https://api.foursquare.com/v2/venues/explore/?client_id=${id}&client_secret=${secret}&v=${v}&categoryId=${categoryId}&sortByPopularity=${sortPopularity}&near=${city.name}&limit=${limit}`
//         );
//         console.log(
//           response.data.response.groups.map((e) =>
//             e.items.map((i) => i.venue.name)
//           )
//         );
//         // city.restaurants = response.data.response.groups.map(e => e.items.map(i => i.venue.name))
//         city.restaurants = response.data.response.groups.map((e) =>
//           e.items.map((i) => i.venue)
//         );
//         await city.save();
//         console.log(
//           `${city.name} restaurant added (${++cityCount} of ${
//             citiesrestaurant.length
//           })`
//         );
//       } catch (error) {
//         console.log(
//           error.response.status,
//           error.response.statusText,
//           `${city.name} (${++cityCount} of ${citiesrestaurant.length})`
//         );
//         break;
//       }
//     }
//   } else if (citiesmuseum) {
//     //Params Search
//     const id = process.env.CLIENT_ID_FOURSQUARE;
//     const secret = process.env.CLIENT_SECRET_FOURSQUARE;
//     const v = process.env.VERSION_FOURSQUARE;
//     const categoryId = "4bf58dd8d48988d12d941735";
//     const sortPopularity = 1;
//     const limit = 2;

//     let citymusCount = 0;
//     for (city of citiesmuseum) {
//       console.log(city.name);
//       try {
//         const response = await axios.get(
//           `https://api.foursquare.com/v2/venues/explore/?client_id=${id}&client_secret=${secret}&v=${v}&categoryId=${categoryId}&sortByPopularity=${sortPopularity}&near=${city.name}&limit=${limit}`
//         );
//         console.log(
//           response.data.response.groups.map((e) =>
//             e.items.map((i) => i.venue.name)
//           )
//         );
//         city.landmarks = response.data.response.groups.map((e) =>
//           e.items.map((i) => i.venue.name)
//         );
//         await city.save();
//         console.log(
//           `${city.name} restaurant added (${++citymusCount} of ${
//             citiesmuseum.length
//           })`
//         );
//       } catch (error) {
//         console.log(
//           error.response.status,
//           error.response.statusText,
//           `${city.name} (${++citymusCount} of ${citiesmuseum.length})`
//         );
//         break;
//       }
//     }
//   }
// });

require("dotenv").config();
const Museum = require("../models/Museum");
const Restaurant = require("../models/Restaurant");
const Landmark = require("../models/Landmark");
const axios = require("axios");
const { withDbConnection } = require("../lib");


// withDbConnection(async () => {
//     const museums = await Museum.find();
//         let museumCount = 0;
//         for (museum of museums) {
//             try {
//                 const response = await axios({
//                     url: "https://www.googleapis.com/customsearch/v1",
//                     params: {
//                         key: process.env.KEY_GOOGLE,
//                         cx: process.env.CX_GOOGLE,
//                         q: museum.name,
//                         searchType: "image",
//                         fileType: "jpg",
//                         cr: true,
//                         alt: "json"
//                     }
//                 });
                
//                 if (response.data.items && response.data.items.length && response.data.items[0].link){
//                   await Museum.findByIdAndUpdate(museum._id, 
//                       museum.images = response.data.items[0].link
//                     )
//                     await museum.save();
//                     console.log(`${museum.name} museums added (${++museumCount} of ${museums.length})`);
//                     continue;
//               } else {
//                 continue;
//               }
//             } catch (error) {
//                 console.log(error);
//                 break;
//             }
//         }
// });


withDbConnection(async () => {
    const restaurants = await Restaurant.find();
    let restaurantCount = 0;
        for (restaurant of restaurants) {
            try {
                const response = await axios({
                    url: "https://www.googleapis.com/customsearch/v1",
                    params: {
                        key: process.env.KEY_GOOGLE,
                        cx: process.env.CX_GOOGLE,
                        q: restaurant.name,
                        searchType: "image",
                        fileType: "jpg",
                        cr: true,
                        alt: "json"
                    }
                });
                
                if (response.data.items && response.data.items.length && response.data.items[0].link){
                  await Restaurant.findByIdAndUpdate(restaurant._id, 
                      restaurant.images = response.data.items[0].link
                    )
                    await restaurant.save();
                    console.log(`${restaurant.name} restaurant added (${++restaurantCount} of ${restaurants.length})`);
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

// withDbConnection(async () => {
//     const landmarks = await Landmark.find();
//     let landmarkCount = 0;
//         for (landmark of landmarks) {
//             try {
//                 const response = await axios({
//                     url: "https://www.googleapis.com/customsearch/v1",
//                     params: {
//                         key: process.env.KEY_GOOGLE,
//                         cx: process.env.CX_GOOGLE,
//                         q: landmark.name,
//                         searchType: "image",
//                         fileType: "jpg",
//                         cr: true,
//                         alt: "json"
//                     }
//                 });
                
//                 if (response.data.items && response.data.items.length && response.data.items[0].link){
//                   await Landmark.findByIdAndUpdate(landmark._id, 
//                     landmark.images = response.data.items[0].link
//                     )
//                     await landmark.save();
//                     console.log(`${landmark.name} landmark added (${++landmarkCount} of ${landmarks.length})`);
//                     continue;
//               } else {
//                 continue;
//               }
//             } catch (error) {
//                 console.log(error);
//                 break;
//             }
//         }
// });
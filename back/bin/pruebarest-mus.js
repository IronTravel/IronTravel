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

// require("dotenv").config();
// const Museum = require("../models/Museum");
// const Restaurant = require("../models/Restaurant");
// const Landmark = require("../models/Landmark");
// const axios = require("axios");
// const { withDbConnection } = require("../lib");


// withDbConnection(async () => {
//     const museums = await Museum.find({ images: { $exists: false } });
//         let museumCount = 0;
//         for (museum of museums) {
//             try {
//                 const response = await axios({
//                     url: "https://www.googleapis.com/customsearch/v1",
//                     params: {
//                         key: process.env.KEY_GOOGLE7,
//                         cx: process.env.CX_GOOGLE7,
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


// withDbConnection(async () => {
//     const restaurants = await Restaurant.find({ images: { $exists: false } });
//     let restaurantCount = 0;
//         for (restaurant of restaurants) {
//             try {
//                 const response = await axios({
//                     url: "https://www.googleapis.com/customsearch/v1",
//                     params: {
//                         key: process.env.KEY_GOOGLE7,
//                         cx: process.env.CX_GOOGLE7,
//                         q: restaurant.name,
//                         searchType: "image",
//                         fileType: "jpg",
//                         cr: true,
//                         alt: "json"
//                     }
//                 });
                
//                 if (response.data.items && response.data.items.length && response.data.items[0].link){
//                   await Restaurant.findByIdAndUpdate(restaurant._id, 
//                       restaurant.images = response.data.items[0].link
//                     )
//                     await restaurant.save();
//                     console.log(`${restaurant.name} restaurant added (${++restaurantCount} of ${restaurants.length})`);
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

// withDbConnection(async () => {
//     const landmarks = await Landmark.find({ images: { $exists: false } });
//     let landmarkCount = 0;
//         for (landmark of landmarks) {
//             try {
//                 const response = await axios({
//                     url: "https://www.googleapis.com/customsearch/v1",
//                     params: {
//                         key: process.env.KEY_GOOGLE4,
//                         cx: process.env.CX_GOOGLE4,
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

// const mongoose = require("mongoose");
// const Travel = new mongoose.Schema(
//   {
//     image:String,
//     travel_type: String,
//     trip: String,
//     city: String,
//     country: String,
//     travel_partners: { type: mongoose.Schema.ObjectId, ref: "user" },
//     visited_places: Array
//   },
//   {
//     timestamps: true
//   }
// );

// module.exports = mongoose.model("travel", Travel);

// *****************************************************************************************************************************************

// image:"https://content.skyscnr.com/m/139e66b951813eed/original/eyeem_65408921.jpg.jpg?resize=1800px:1800px&#038;quality=100"
// name: The Blue Lagoon, 
// country: Islandia

// image: "https://content.skyscnr.com/m/747b83ab736f8e6b/original/GettyImages-515722479_doc.jpg?resize=1800px:1800px&#038;quality=100"
// name:Machu Picchu, 
// country:Perú

// image: "https://content.skyscnr.com/7805c7de6f4e7816a4fe0a7cc386969e/GettyImages-183633046.jpg"
// name:Stonehenge
// country:Reino Unido

// image:"https://content.skyscnr.com/e9f18d98773d244ceef7d45bc67f6ef8/GettyImages-523665439.jpg"
// name:Cristo Redentor
// country: Brasil
// city: Rio de Janeiro

// image:"https://content.skyscnr.com/28f9e38f288581eea0a2c2cd73016f9e/GettyImages-177102278.jpg"
// name:Acrópolis de Atenas, 
// country: Grecia
// city: Atenas

// image:"https://content.skyscnr.com/0fb8578abe113048d7ee9a9873dafe92/GettyImages-176421733.jpg"
// name:La Gran Muralla China
// country:China
// city:

// image:"https://content.skyscnr.com/73b2d0e7d3be0bb696808efda2ce7227/GettyImages-460860677.jpg" 
// name:La Gran Pirámide de Giza
// country:Egipto
// city:

// image:"https://content.skyscnr.com/1fa5a5edc230fb4400ea1faf394e49b3/GettyImages-463497475.jpg"
// name:Cataratas del Niágara,
// country:EEUU/Canada
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/bali-indonesia_5ae3dbfe.jpg"
// name:Bali, 
// country:INDONESIA
// city:Bali

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/londres_b72fb870.jpg"
// name:londres
// country:GRAN BRETAÑA
// city:londres

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/paris_fa5c2ffd.jpg"
// name:Paris
// country:FRANCIA
// city:Paris

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/roma_2d72ff93.jpg"
// name:ROMA, ITALIA
// country:
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/nueva-york_66d209da.jpg"
// name:NUEVA YORK
// country: ESTADOS UNIDOS
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/crreta_00e27614.jpg"
// name:CRETA, GRECIA
// country:
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/siem-reap_4b200b19.jpg"
// name:SIEM REAP, CAMBOYA
// country:
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/praga_efedffee.jpg"
// name:PRAGA, REPÚBLICA CHECA
// country:
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/phuket_b973ead8.jpg"
// name:PHUKET, TAILANDIA
// country:
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/estambul_17d2edff.jpg"
// name:ESTAMBUL, TURQUÍA
// country:
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/jamaica_bd82f235.jpg"
// name:JAMAICA
// country:
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/hoi-an-vietnam_a566cd37.jpg"
// name:HOI AN, VIETNAM
// country:
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/sant-petersburgo_2e25e940.jpg"
// name:SAN PETERSBURGO, RUSIA
// country:
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/roatan-honduras_09885818.jpg"
// name:ROATÁN, HONDURAS
// country:
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/marrakech-marruecos_71cde678.jpg"
// name:MARRAKECH, MARRUECOS
// country:
// city:


// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/belice_3eb66274.jpg"
// name:BELICE
// country:
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/rio-de-janeiro-brasil_7686ae32.jpg"
// name:RÍO DE JANEIRO, BRASIL
// country:
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/isla-de-san-martin_e8e582b8.jpg"
// name:ISLA DE SAN MARTÍN
// country:
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/playa-del-carmen_e282eb30.jpg"
// name:PLAYA DEL CARMEN, MÉXICO
// country:
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/dubai-emiratos-arabes-unidos_e7e63fff.jpg"
// name:DUBAI, EMIRATOS ÁRABES UNIDOS
// country:
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/gran-caiman-islas-caiman_c15a31ba.jpg"
// name:GRAN CAIMÁN, ISLAS CAIMÁN
// country:
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/katmandu-nepal_7443c9e8.jpg"
// name:KATMANDÚ, NEPAL
// country:
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/bora-bora-islas-de-la-sociedad_6007a5de.jpg"
// name:BORA BORA, ISLAS DE LA SOCIEDAD
// country:
// city:

// image:"https://viajes.nationalgeographic.com.es/medio/2017/04/24/cuzco-peru_f68afd77.jpg"
// name:CUZCO, PERÚ
// country:
// city:
 //******************************************************************************************************************************************

//  ["https://viajes.nationalgeographic.com.es/medio/2017/04/24/cuzco-peru_f68afd77.jpg",
// ,"https://viajes.nationalgeographic.com.es/medio/2017/04/24/marrakech-marruecos_71cde678.jpg"
// ,"https://viajes.nationalgeographic.com.es/medio/2017/04/24/rio-de-janeiro-brasil_7686ae32.jpg"
// ,"https://viajes.nationalgeographic.com.es/medio/2017/04/24/dubai-emiratos-arabes-unidos_e7e63fff.jpg"
// ,"https://viajes.nationalgeographic.com.es/medio/2017/04/24/katmandu-nepal_7443c9e8.jpg"
// ,"https://content.skyscnr.com/m/747b83ab736f8e6b/original/GettyImages-515722479_doc.jpg?resize=1800px:1800px&#038;quality=100"
// ,"https://content.skyscnr.com/7805c7de6f4e7816a4fe0a7cc386969e/GettyImages-183633046.jpg"
// ,"https://content.skyscnr.com/e9f18d98773d244ceef7d45bc67f6ef8/GettyImages-523665439.jpg"
// ,"https://content.skyscnr.com/28f9e38f288581eea0a2c2cd73016f9e/GettyImages-177102278.jpg"
// ,"https://content.skyscnr.com/0fb8578abe113048d7ee9a9873dafe92/GettyImages-176421733.jpg"
// ,"https://content.skyscnr.com/73b2d0e7d3be0bb696808efda2ce7227/GettyImages-460860677.jpg" 
// ,"https://content.skyscnr.com/1fa5a5edc230fb4400ea1faf394e49b3/GettyImages-463497475.jpg"
// ,"https://viajes.nationalgeographic.com.es/medio/2017/04/24/sant-petersburgo_2e25e940.jpg"
// ,"https://viajes.nationalgeographic.com.es/medio/2017/04/24/isla-de-san-martin_e8e582b8.jpg"
// ,"https://viajes.nationalgeographic.com.es/medio/2017/04/24/playa-del-carmen_e282eb30.jpg"
// ,"https://viajes.nationalgeographic.com.es/medio/2017/04/24/gran-caiman-islas-caiman_c15a31ba.jpg"
// ,"https://viajes.nationalgeographic.com.es/medio/2017/04/24/bora-bora-islas-de-la-sociedad_6007a5de.jpg"
// ,"https://viajes.nationalgeographic.com.es/medio/2017/04/24/hoi-an-vietnam_a566cd37.jpg"
// ,"https://viajes.nationalgeographic.com.es/medio/2017/04/24/jamaica_bd82f235.jpg"
// ,"https://viajes.nationalgeographic.com.es/medio/2017/04/24/sant-petersburgo_2e25e940.jpg"
// ,"https://viajes.nationalgeographic.com.es/medio/2017/04/24/cuzco-peru_f68afd77.jpg"]

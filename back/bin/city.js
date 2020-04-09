const City = require("../models/City");
const { withDbConnection, dropIfExists} = require("../lib");

const cheerio = require('cheerio');
const axios = require('axios');

axios.get('https://www.delicious.com.au/travel/international/gallery/100-cities-deserve-place-travel-bucket-list/o4lzlr69?page=100')
.then(response => {
    const $ = cheerio.load(response.data);
    const items = $('.gallery-slides .slide')
        .map(function () {
            let title = $(this).find('.slide-title').text().trim().split(', ')
            let description = $(this).find('.description').text()
            return {
              city: title.shift(),
              country: title.pop(),
              description: description,
              image: $(this).find("img").attr("data-src") || $(this).find("img").attr("src"),
            };
        }).get()
        withDbConnection(async () => {
            await dropIfExists(City);
            await City.create(
                items.map(element => {
                    return element
                }))
            })
})

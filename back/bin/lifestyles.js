const LifeStyle = require("../models/LifeStyle");
const { withDbConnection, dropIfExists } = require("../lib");

withDbConnection(async () => {
    await dropIfExists(LifeStyle);
    await LifeStyle.create(
        ['Adventurer',
            'Artsy',
            'Athlete',
            'Avid reader',
            'Chef',
            'Movie lover',
            'Culture enthusiast',
            'Dancer',
            'Early bird',
            'Entrepreneur',
            'Family person',
            'Fashionista',
            'Foodie',
            'Gamer',
            'Health-conscious',
            'Homebody',
            'Avid music lover',
            'Night owl',
            'Party animal',
            'Pet lover',
            'Photographer',
            'Shopoholic',
            'Singer',
            'Techie',
            'Theater lover',
            'Travel junkie',
            'Vegan',
            'Vegetarian',
            'Walker',
            'Workaholic'
        ].map(name => {
            return { name };
        })
    );
});
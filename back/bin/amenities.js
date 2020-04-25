const Amenity = require("../models/Amenity");
const { withDbConnection, dropIfExists } = require("../lib");

withDbConnection(async () => {
    await dropIfExists(Amenity);
    await Amenity.create(
        ['Air conditioning',
            'Balcony',
            'Bathroom',
            'Bathtub',
            'Bed Linen',
            'Cable TV',
            'Chairs',
            'Children Area',
            'Coffee Maker in Room',
            'Cookware & Kitchen Utensils',
            'Dishwasher',
            'Double bed',
            'En suite bathroom',
            'Free Wireless Internet',
            'Freezer',
            'Fridge / Freezer',
            'Hair Dryer',
            'Heating',
            'Ironing Board',
            'Microwave',
            'Oven',
            'Queen size bed',
            'Shower',
            'Sofa',
            'Stereo',
            'Toilet',
            'Towels',
            'TV'
        ].map(name => {
            return { name };
        })
    );
});
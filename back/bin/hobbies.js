const Hobby = require("../models/Hobby");
const { withDbConnection, dropIfExists } = require("../lib");

withDbConnection(async () => {
    await dropIfExists(Hobby);
    await Hobby.create(
        ['Reading',
            'Watching TV',
            'Family Time',
            'Going to Movies',
            'Fishing',
            'Computer',
            'Gardening',
            'Renting Movies',
            'Walking',
            'Exercise',
            'Listening to Music',
            'Entertaining',
            'Hunting',
            'Team Sports',
            'Shopping',
            'Traveling',
            'Sleeping',
            'Socializing',
            'Sewing',
            'Golf',
            'Church Activities',
            'Relaxing',
            'Playing Music',
            'Housework',
            'Crafts',
            'Watching Sports',
            'Bicycling',
            'Playing Cards',
            'Hiking',
            'Cooking',
            'Eating Out',
            'Dating Online',
            'Swimming',
            'Camping',
            'Skiing',
            'Working on Cars',
            'Writing',
            'Boating',
            'Motorcycling',
            'Animal Care',
            'Bowling',
            'Painting',
            'Running',
            'Dancing',
            'Horseback Riding',
            'Tennis',
            'Theater',
            'Billiards',
            'Beach',
            'Volunteer Work'
        ].map(name => {
            return { name };
        })
    );
});
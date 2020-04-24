const Personality = require("../models/Personality");
const { withDbConnection, dropIfExists } = require("../lib");

withDbConnection(async () => {
    await dropIfExists(Personality);
    await Personality.create(
        ['Active',
            'Caring',
            'Cheerful',
            'Cooperative',
            'Creative',
            'Determined',
            'Enthusiastic',
            'Flexible',
            'Friendly',
            'Fun',
            'Honest',
            'Prankster',
            'Optimistic',
            'Organized',
            'Passionate',
            'Proactive',
            'Rational',
            'Chill',
            'Social',
            'Tolerant'
        ].map(name => {
            return { name };
        })
    );
});
const Personality = require("../models/Personality");
const { withDbConnection, dropIfExists } = require("../lib");

withDbConnection(async () => {
    await dropIfExists(Personality);
    await Personality.create(
        ['Active',
            'Calm',
            'Caring',
            'Cheerful',
            'Cooperative',
            'Creative',
            'Determined',
            'Easy-going',
            'Empathetic',
            'Enthusiastic',
            'Flexible',
            'Friendly',
            'Fun',
            'Honest',
            'Prankster',
            'Optimistic',
            'Organized',
            'Passionate',
            'Practical',
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
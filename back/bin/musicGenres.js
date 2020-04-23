const MusicGenre = require("../models/MusicGenre");
const { withDbConnection, dropIfExists } = require("../lib");

withDbConnection(async () => {
    await dropIfExists(MusicGenre);
    await MusicGenre.create(
        ["acoustic",
            "alternative",
            "anime",
            "blues",
            "bossanova",
            "british",
            "children",
            "classical",
            "club",
            "country",
            "dance",
            "disco",
            "drum-and-bass",
            "dubstep",
            "electronic",
            "folk",
            "funk",
            "gospel",
            "groove",
            "guitar",
            "hard-rock",
            "heavy-metal",
            "hip-hop",
            "house",
            "indie",
            "j-pop",
            "j-rock",
            "jazz",
            "k-pop",
            "latin",
            "mandopop",
            "metal",
            "opera",
            "party",
            "pop",
            "punk",
            "punk-rock",
            "reggae",
            "reggaeton",
            "rock",
            "romance",
            "sad",
            "salsa",
            "samba",
            "ska",
            "soul",
            "synth-pop",
            "tango",
            "techno",
            "trance"
        ].map(name => {
            return { name };
        })
    );
});
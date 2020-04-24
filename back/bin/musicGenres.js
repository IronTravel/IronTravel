const MusicGenre = require("../models/MusicGenre");
const { withDbConnection, dropIfExists } = require("../lib");

withDbConnection(async () => {
    await dropIfExists(MusicGenre);
    await MusicGenre.create(
        ["alternative",
            "blues",
            "bossanova",
            "classical",
            "club",
            "country",
            "dance",
            "disco",
            "dubstep",
            "electronic",
            "folk",
            "funk",
            "gospel",
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
            "metal",
            "opera",
            "pop",
            "punk",
            "punk-rock",
            "reggae",
            "reggaeton",
            "rock",
            "salsa",
            "samba",
            "soul",
            "techno",
            "trance"
        ].map(name => {
            return { name };
        })
    );
});
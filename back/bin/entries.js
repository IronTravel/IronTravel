const { withDbConnection, dropIfExists, getRandomText, getRandomFromArray } = require("../lib");
const User = require("../models/User");
const Entry = require("../models/Entry");

withDbConnection(async () => {

    const users = await User.find({});
    let entries = [];

    for (user of users) {
        let entriesQty = Math.floor(Math.random() * 10);

        for (let i = 0; i <= entriesQty; i++) {
            const posts = await getRandomText();
            entries.push({
                author: user._id,
                body: posts.data.pop(),
                type: 'text',
                hidden: false,
                likes: getRandomFromArray(users, Math.floor(Math.random() * 20), true)
            })
        }
    }

    await dropIfExists(Entry);
    await Entry.create(entries);
});
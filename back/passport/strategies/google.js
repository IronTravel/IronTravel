require("dotenv").config();
const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const User = require("../../models/User")

const id = process.env.CLIENT_ID_GOOGLE
const secret = process.env.CLIENT_SECRET_GOOGLE

passport.use(new GoogleStrategy({
    clientID: id,
    clientSecret: secret,
    callbackURL: "http://localhost:1234/auth/google/callback"
  },
  async function (accessToken, refreshToken, profile, cb) {
    console.log(profile.id);

    const existingUser = await User.findOne({ googleId: profile.id });
    console.log(existingUser);
    if (existingUser) {
      existingUser.name = profile.name.familyName;
      existingUser.avatar = profile._json.picture;
      console.log(`Welcome again google user ${existingUser.username}`);
      return cb(null, existingUser);
    } else {
      const newUser = await User.create({
        name: profile.name.familyName,
        avatar: profile._json.picture,
        googleId: profile.id,
      });
      console.log(`New user from Google ${newUser.username}`);
      return cb(null, newUser);
    }
  }
)
);
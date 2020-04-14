require("dotenv").config();
const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const User = require("../../models/User")

const id = process.env.CLIENT_ID_GOOGLE
const secret = process.env.CLIENT_SECRET_GOOGLE

passport.use(new GoogleStrategy({
    clientID: id,
    clientSecret: secret,
    callbackURL: "http://localhost:3005/auth/google/callback"
  },
  async function (accessToken, refreshToken, profile, cb) {
    console.log(profile.id);

    const existingUser = await User.findOne({ googleId: profile.id });
    console.log(profile);
    // console.log(email);
    
    if (existingUser) {
      
      existingUser.name = profile.name.givenName;
      existingUser.avatar = profile.photos[0].value;
      existingUser.email = profile.emails[0].value;
      console.log(`Welcome again google user ${existingUser.name}`);
      return cb(null, existingUser);
    } else {
      const newUser = await User.create({
        name: profile.name.familyName,
        avatar: profile.photos[0].value,
        email: profile.emails[0].value,
        googleId: profile.id,
      });
      console.log(`New user from Google ${newUser}`);
      return cb(null, newUser);
    }
  }
)
);
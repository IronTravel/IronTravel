const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/User');
const { checkHashedPassword } = require('../../lib/hashing');

passport.use(
  new LocalStrategy(async (email, password, done) => {
    try {
      const foundUser = await User.findOne({ email });
      if (foundUser) {
        checkHashed(password, foundUser.password)
          ? done(null, foundUser)
          : done(null, false);
      } else {
        done(null, false);
      }
    } catch (error) {
      done(error);
    }
  })
);
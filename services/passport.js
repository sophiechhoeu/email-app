const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

//one argument is fetching something out of mongoose
//two arguments is we're trying to load something into it

const User = mongoose.model('users');

//serialize  user and put it in the cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//function we write to turn user id into a user model instance
passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => {
    done( null, user);
  })
})

//end product - user model instance is added to the req object as req.user

passport.use(
  new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL:'/auth/google/callback',
  proxy: true
  },
async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id })

      if (existingUser) {
            return done(null, existingUser);
          }
      const user = await new User({ googleId: profile.id }).save()
      done(null, user);
      }
  )
);

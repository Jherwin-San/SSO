const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");



passport.use(
  new GoogleStrategy(
    {
      // clientID: GOOGLE_CLIENT_ID,
      // clientSecret: GOOGLE_CLIENT_SECRET,
      // callbackURL: "/auth/google/callback",
	    passReqToCallback: true
    },
    function(request, accessToken, refreshToken, profile, done){

        // "done" is a parameter used in the function that functions as a callback.
        // "done" is considered as a naming convention for callbacks.
        // Callbacks are executed only when called inside the function they are defined in.
        return done(null, profile);
    
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      // clientID: GITHUB_CLIENT_ID,
      // clientSecret: GITHUB_CLIENT_SECRET,
      // callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      // clientID: FACEBOOK_APP_ID,
      // clientSecret: FACEBOOK_APP_SECRET,
      // callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);


// This function is used to serialize the user object into a session.
// In this case, the entire user object is serialized.
// The serialized user object is then stored in the session.
passport.serializeUser(function(user, done){
	done(null, user);
});

// This function is used to deserialize the user object from the session.
// It retrieves the serialized user object from the session and passes it to the "done" callback.
passport.deserializeUser(function(user, done){
	done(null, user);
});

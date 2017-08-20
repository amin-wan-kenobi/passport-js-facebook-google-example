const express = require('express');
const bodyParser = require('body-parser');
let passport = require('passport');

let googleStrategy = require('passport-google-oauth').OAuth2Strategy;
let fbStrategy = require('passport-facebook').Strategy;
const { google, facebook } = require('./config');

const app = express();
app.use(bodyParser.json());
app.use(passport.initialize());

passport.use(new googleStrategy({
    clientID: google.clientID,
    clientSecret: google.clientSecret,
    callbackURL: google.callbackURL
}, function (accessToken, freshToken, profile, cb) {
    return cb(null, profile);
}));
passport.use(new fbStrategy({
    clientID: facebook.clientID,
    clientSecret: facebook.clientSecret,
    callbackURL: facebook.callbackURL,
    profileFields: facebook.profileFields
}, function (accessToken, freshToken, profile, cb) {
    return cb(null, profile);
}));


app.get('/', (req, res) => {
    res.send('HELLO THERE GOOGLE/FACEBOOK');
});

app.get('/login/google', 
    passport.authenticate('google', {scope: google.scope}));
app.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/failed'
    }),
    (req, res) => {
        res.json(req.user._json);
    }
);

app.get('/login/facebook', passport.authenticate('facebook'));
app.get('/facebook/callback',
    passport.authenticate('facebook', {
        failureRedirect: '/failed'
    }),
    (req, res) => {
        res.json(req.user._json);
    }
);

app.get('/failed', (req, res) => {
    res.send('<h1>FAILED</h1>');
});

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

app.listen(3000, () => { console.log('Running at port 3000') });
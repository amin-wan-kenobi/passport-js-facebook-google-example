const express = require('express');
const bodyParser = require('body-parser');

let passport = require('passport');
let googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { google } = require('./config');

const app = express();
app.use(bodyParser.json());
app.use(passport.initialize());

passport.use(new googleStrategy({
    clientID: google.clientID,
    clientSecret: google.clientSecret,
    callbackURL: google.callbackURL
}, function (accessToken, freshToken, profile, cb) {
    return cb(null, profile);
}))

app.get('/', (req, res) => {
    res.send('HELLO THERE GOOGLE');
});

app.get('/login/google', passport.authenticate('google', {scope: google.scope}));

app.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/failed'
    }),
    (req, res) => {
        res.send(req.user._json);
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
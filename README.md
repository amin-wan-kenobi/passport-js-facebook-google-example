# passport-js-facebook-google-example

This is a simple example of how to use passport.js for both facebook and google accounts.

### Installation
```sh
$ npm install
```

### Config file
```sh
clientID: 'YOUR_FACEBOOK_CLIENT_ID',
clientSecret: 'YOUR_FACEBOOL_CLIENT_SECRET',
callbackURL: 'http://localhost:3000/YOUR_FACEBOOK_CALL_BACK_URL',
profileFields: ['email', 'id', 'name', 'gender', 'picture']

clientID: 'YOUR_GOOGLE_CLIENT_ID',
clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
callbackURL: 'http://localhost:3000/YOUR_GOOGLE_CALL_BACK_URL',
scope: ['https://www.googleapis.com/auth/plus.profile.emails.read']
```


### Run Facebook
```sh
$ node server-facebook.js
```

### Run Google
```sh
$ node server-google.js
```

### Run Facebook and Google
```sh
$ node server.js
```

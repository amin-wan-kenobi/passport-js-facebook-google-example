const facebook = {
    clientID: '',
    clientSecret: '',
    callbackURL: '',
    profileFields: ['email', 'id', 'name', 'gender', 'picture']
};

const google = {
    clientID: '',
    clientSecret: '',
    callbackURL: '',
    scope: ['https://www.googleapis.com/auth/plus.profile.emails.read']
};

module.exports = {
    facebook, google
}
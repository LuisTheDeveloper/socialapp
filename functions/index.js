const functions = require("firebase-functions");
const app = require('express')();

const FBAuth = require('./middleware/fbAuth');

const {getAllScreams, postOneScream} = require('./handlers/screams')
const {signup, login, uploadImage, addUserDetails} = require('./handlers/users')

// Scream routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream)
app.post('/user', FBAuth, addUserDetails);

// users route
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage)
exports.api = functions.https.onRequest(app)

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const firebase = require('firebase/app');
require('firebase/database');
var firebaseConfig = {
    apiKey: "AIzaSyD7HBdoC4a8nH2-OKIosVdN9HGsFR2SR04",
    authDomain: "smart-car-parking-system-b6c28.firebaseapp.com",
    databaseURL: "https://smart-car-parking-system-b6c28.firebaseio.com",
    projectId: "smart-car-parking-system-b6c28",
    storageBucket: "smart-car-parking-system-b6c28.appspot.com",
    messagingSenderId: "606716196530",
    appId: "1:606716196530:web:4468c6738577b17dd3fbab",
    measurementId: "G-0FLPCGLTB4"
};
try {
    firebase.default.initializeApp(firebaseConfig);
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}
let database = firebase.default.database();
app.get('/', (req, res) => {
    res.statusCode = 200;
    database.ref('CarNumber').once('value', (snapshot) => {
        res.json(snapshot.val());
    });
});

exports.number = functions.https.onRequest(app);

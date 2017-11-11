var firebase = require('firebase')

var config = {
  apiKey: "AIzaSyBA1tYqIDnKjJUs4GJxL0hDnecbwL8xbgc",
  authDomain: "hackathonusp.firebaseapp.com",
  databaseURL: "https://hackathonusp.firebaseio.com",
  projectId: "hackathonusp",
  storageBucket: "hackathonusp.appspot.com",
  messagingSenderId: "600133113199"
};

firebase.initializeApp(config);

module.exports = firebase;
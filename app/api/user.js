'use-strict'

const uuidv4 = require('uuid/v4');
let moment = require('moment')

var firebase = require('../../config/database')
var database = firebase.database()
var api = {};


api.readUserData = function (req, res) {
  var path = '/user/' + req.body.path;
  
  database.ref(path).once('value').then((data) => {
    res.status(200);
    res.json({
      response: data
    })
  })

}

api.updateUser = function (req, res) {
  // TODO: update more than 1 property pls
  var path = '/user/' + req.body.path;
  var update = req.body.data;
  
  var data = {};
  data[path] = now;
  
  database.ref().update(data).then(() => {
    res.status(200);
    res.json({
      message: update
    })
  });
}

api.createUser = function (req, res) {
  var data = req.body.data;

  var path = '/user/' + data.sus;
  delete data.sus;

  database.ref(path).set(data).then(() => {
    res.status(200);
    res.json({
      message: "User created successfully",
      data: req.body
    });
  });
}

api.generateCertificate = function (req, res) {
  var path;
  
  database.ref(path).once('value').then((userData) => {
    var uuid = uuidv4();
    var date = moment();
    var day = date.format('D/M/YYYY');
    var hour = date.format('H:mm:ss');
    
    // Generate certificate here

    
    res.status(200);
    res.json({
      response: data
    })
  })

}

module.exports = api;
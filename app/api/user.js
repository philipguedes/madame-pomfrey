'use-strict'

const uuidv4 = require('uuid/v4');
let moment = require('moment')

var firebase = require('../../config/database')
var database = firebase.database()
var api = {};


api.readUserData = function (req, res) {
  var path = '/user/' + req.body.path;

  database.ref(path).once('value').then((data) => {
    console.log('lendo usuario')
    res.status(200);
    res.json({
      response: data
    })
  })

}

api.updateUser = function (req, res) {
  console.log('entrou')
  console.log(req.body);
  // TODO: update more than 1 property pls
  var path = '/user/' + req.body.path;
  var update = req.body.data;

  var data = {};
  data[path] = update;

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
  var path = '/user/' + req.body.path + '/certificado';
  var uuid = uuidv4();
  var date = moment();
  var formatted = date.format('D/M/YYYY, HH:mm:ss');
  var data = {}
  data[path] = { codigo: uuid, data: formatted };

  database.ref().update(data).then(() => {
    // var response = data[path]
    res.status(200);
    res.json({
      data: data[path]
    })
  });
  // database.ref().update('value').then((userData) => {
  //   // var hour = date.format('H:mm:ss');

  //   // Generate certificate here


  //   res.status(200);
  //   res.json({
  //     response: data
  //   })
  // })

}

api.recoverCertificate = function (req, res) {
  var path = '/user/' + req.body.path;
  console.log(path);
  database.ref(path).once('value').then((data) => {
    console.log('lendo usuario')

    console.log(data.response);
    res.status(200);
    res.json({
      response: data
    });
    
  });
}

module.exports = api;
'use-strict'

let moment = require('moment')

var firebase = require('../../config/database')
var database = firebase.database()
var api = {};


api.getUser = function (req, res) {
  database.ref('user').once('value').then((data) => {
    res.status(200);
    res.json({
      response: data
    })
  })

}

api.updateUser = function (req, res) {
  var path = req.body.path;
  var update = req.body.data;
  
  var data = {};
  data['/user/update'] = now;
  
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


module.exports = api;
'use-strict'

var firebase = require('../../config/database')
var database = firebase.database()


var api = {};

api.teste = function (req, res) {
  
  res.status(200);

  res.json({
    mensagem: 'sucesso'
  });

}

api.testeDados = function (req, res) {
  database.ref('"99999999999"').once('value').then( (snap) => {
    res.status(200);
    res.json({
      mensagem: snap
    })
  })

}


module.exports = api;
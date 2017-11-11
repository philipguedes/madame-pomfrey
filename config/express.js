'use-strict'

let express = require('express');
let bodyParser = require('body-parser');
let consign = require('consign');


var app = module.exports.app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


consign({cwd: 'app', verbose: false})
  .include('api')
  .then('routes/user/auth.js')
  .then('routes')
  .into(app)

module.exports = app;
let http = require('http')

let app = require('./config/express')


http.createServer(app).listen('4242', function(res) {
  console.log('done at port 4242')
});
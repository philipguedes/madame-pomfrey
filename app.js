let http = require('http')
let app = require('./config/express')


var port = process.env.PORT || 4200;

http.createServer(app).listen(port, function(res) {
  console.log('done at port ' + port);
});
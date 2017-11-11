module.exports = function(app) {
  var api = app.api.teste;

  app.route('/teste').get(api.teste);
}

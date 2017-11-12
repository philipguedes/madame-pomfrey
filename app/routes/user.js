module.exports = function(app) {
  var api = app.api.user;

  app.route('/user/all').get(api.getUser);

  app.route('/user/update').post(api.updateUser);

  app.route('/user/create').post(api.createUser);
}

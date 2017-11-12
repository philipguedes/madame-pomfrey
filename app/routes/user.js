module.exports = function(app) {
  var api = app.api.user;

  app.route('/user/read').post(api.readUserData);

  app.route('/user/update').post(api.updateUser);

  app.route('/user/create').post(api.createUser);

  app.route('/user/certificate').post(api.generateCertificate);

  app.route('/user/certificate/recover').post(api.recoverCertificate);
}

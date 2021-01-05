const usuariosControlador = require('./usuarios-controlador');
const passport = require('passport');
const middlewaresAuthenticate = require('./middlewares-authenticacao');
module.exports = app => {
  app
     .route('/usuario/Login')
     .post(middlewaresAuthenticate.local, usuariosControlador.login);
  app.route('/usuario/logout').get(middlewaresAuthenticate.bearer, usuariosControlador.logout);
  app
    .route('/usuario')
    .post(usuariosControlador.adiciona)
    .get(usuariosControlador.lista);

  app.route('/usuario/:id').delete(middlewaresAuthenticate.bearer,usuariosControlador.deleta);
};

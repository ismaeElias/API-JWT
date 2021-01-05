module.exports = {
  rotas: require('./usuarios-rotas'),
  controlador: require('./usuarios-controlador'),
  modelo: require('./usuarios-modelo'),
  estrategiasAuth : require('./estrategias-Auth'),
  middlewaresAuth : require('./middlewares-authenticacao')
}
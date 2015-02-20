
/**
 * Module dependencies.
 */

var express = require('express')
  , informante = require('./routes/informante')
  , norte = require('./routes/norte')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(permitirCrossDomain);
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', informante.inicio);
/*
 * Api diarioelinformante.com.ar
 */
app.get('/informante', informante.portada);
app.get('/informante/secciones/:seccion', informante.seccion);
app.get('/informante/nota/:id', informante.nota);

/*
 * Api diarioelnorte.com.ar
 */
app.get('/norte', norte.portada);

/*
 * Cliente AngularJS
 * NO TOCAR
 */
//app.get('/noticiaslimpias', noticiaslimpias.inicio)



http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

// var connection = require('./db/conexion');
// require('./boot')

function permitirCrossDomain(req, res, next) {
  //en vez de * se puede definir SÓLO los orígenes que permitimos
  res.header('Access-Control-Allow-Origin', '*');
  //metodos http permitidos para CORS
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}


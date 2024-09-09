const express = require('express')
const exphbs = require('express-handlebars'); 
const path = require('path');


//configuraciones
const app = express()
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main', //propiedades de handlerbars //crear carpeta views/layouts/main.hbs
  layoutsDir: path.join(app.get('views'),'layouts'),
  partialsDir: path.join(app.get('views'),'partials'), //partes como formulario
   extname: '.hbs' //extensión de los archivos
}));
app.set('view engine', '.hbs'); //motor de vistas en hbs



//rutas
app.use(require('./routes/index'));

//Servidor
app.listen(app.get('port'), () => {
  console.log(`Example app listening on port`, app.get('port'))
});
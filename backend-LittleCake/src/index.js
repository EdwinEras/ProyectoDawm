const express = require('express');
const { urlencoded } = require('express');
const path = require('path');
const exp_hb = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session')
const flash = require('connect-flash');
const passport = require('passport');

//iniacion
const app = express();
require('./database');
require('./config/passport');

//setting 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/views'));
app.engine('hbs', exp_hb({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

//middleware
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secretoÑ',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    res.locals.user = req.user || null;
    next();
});

//routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/noticias'));
app.use(require('./routes/productos'));
app.use(require('./routes/compras.js'));

//static fields
app.use(express.static(path.join(__dirname, '/public')));

//server listening
app.listen(app.get('port'), ()=>{
    console.log(__dirname);
    console.log("server on port: ", app.get('port'))
});
//revisar las rutas que se encuentran en la carpeta routes
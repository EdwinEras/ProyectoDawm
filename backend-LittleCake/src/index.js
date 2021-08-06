const express = require('express');
const { urlencoded } = require('express');
const methodOverride = require('method-override');
const session = require('express-session')
const flash = require('connect-flash');
const passport = require('passport');

/////////////////////////////////////////////
/////////////AUN NO ESTA EN USO/////////////
///////////////////////////////////////////
require('./database');


//iniacion
const app = express();
require('./config/passport');

//setting 
app.set('port', process.env.PORT || 3000);

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secretoÑ',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000*24*60*60
    }
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
app.use(require('./routes/base.js'));
app.use(require('./routes/crudUser'));

// app.use(require('./routes/crudProducto'));   
// app.use(require('./routes/crudCompra.js'));
// app.use(require('./routes/crudCategoria.js'));


//server listening
app.listen(app.get('port'), ()=>{
    console.log("server on port: ", app.get('port'))
});
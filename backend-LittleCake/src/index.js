const express = require('express');
const { urlencoded } = require('express');
const path = require('path');
const exp_hb = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session')

//iniacion
const app = express();
require('./database');

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

//global variables

//routes
app.use(require('./routes/index'));
app.use(require('./routes/users'));

//static fields
app.use(express.static(path.join(__dirname, '/public')));

//server listening
app.listen(app.get('port'), ()=>{
    console.log(__dirname);
    console.log("server on port: ", app.get('port'))
});

const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const exp_hb = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-sessions')
const app = express();
//setting 
app.set('port', process.env.PORT || 3000);
app.set('src/views', path.join(__dirname, 'src/views'));
app.engine('.hbs', exp_hb({
    defaultLayout: 'main',
    layoutsDirr: path.join(app.get('src/views'), 'layouts'),
    partialsDir:path.join(app.get('src/views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//middleware
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
/*app.use(session({
    secret: 'mySecretoÑ',
    resave: true,
    saveUninitialized: true
}));*/
//global variables

//routes
app.use(require('./src/routes/index'));
app.use(require('./src/routes/users'));
//static fields

//server listening
app.listen(app.get('port'), ()=>{
    console.log("server on port: ",app.get('port'))
});

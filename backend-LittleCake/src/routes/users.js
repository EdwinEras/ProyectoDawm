const router = require('express').Router();
const User = require('../models/User');
const passport = require('passport');

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.send(req.user)
});

router.post('/registro', async (req, res)=>{
    let nombre = req.body.nombre; 
    let apellido = req.body.apellido; 
    let email = req.body.email;
    let password = req.body.password;
    let confPass = req.body.confPassword;
    if(password != confPass){
        pass = null;
    }
    const errors = [];
    if(!nombre){
        errors.push({text: "Porfavor complete el nombre"});
    }
    if(!apellido){
        errors.push({text: "Porfavor complete el apellido"});
    }
    if(!email){
        errors.push({text: "Porfavor complete el email"});
    }
    if(!password || !confPass){
        errors.push({text: "Porfavor complete la contraseña"});
    }
    if(errors.length > 0){
        res.send({
            errors,
            nombre, 
            apellido,
            email
        });
    }
    else{
        let usrEmail = await User.findOne({email:email});
        if (usrEmail){
            req.flash('error_msg', 'Su usuario se encuentra registrado');
            return res.redirect('/registro');
        }
        let newUser = new User({nombre, apellido, email, password});
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash('success_msg', 'Registrado correctamente');
        //return res.redirect('/login');
    }
})

module.exports = router;
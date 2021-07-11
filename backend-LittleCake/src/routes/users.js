const router = require('express').Router();
const Login = require('../models/Login');
const User = require('../models/User');

router.get('/signin', (req, res)=>{
    res.render('login', {title: 'login'});
});

router.post('/newlogin', async (req, res)=>{
    let email = req.body.email;
    let pass = req.body.password;
    let errors = [];
    if(!email){
        errors.push({text: "Porfavor complete el email"});
    }if(!pass){
        errors.push({text: "Porfavor complete la contraseña"});
    }
    if(errors.length > 0){
        res.render('login', {
            errors,
            email,
        });
    }
    else{
        console.log(req.body);
        res.send("ok");
    }
})

router.get('/signup', (req, res)=>{
    res.render('registro', {title: 'registro'});
});

router.post('/newregistro', async (req, res)=>{
    console.log(req.body);
    let nombre = req.body.nombre; 
    let apellido = req.body.apellido; 
    let email = req.body.email;
    let pass = req.body.password;
    let confPass = req.body.confPassword;
    if(pass != confPass){
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
    if(!pass || !confPass){
        errors.push({text: "Porfavor complete la contraseña"});
    }
    if(errors.length > 0){
        res.render('registro', {
            errors,
            nombre, 
            apellido,
            email
        });
    }
    else{
        let newUser = new User({nombre, apellido, email, pass});
        await newUser.save();
        res.redirect('/correctUser');
    }
})

router.get('/correctUser', async (req, res)=>{
    let usr = await User.find();
    res.render('userSesion', {usr});
})

module.exports = router;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User')

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done)=>{
    let user = await User.findOne({email: email});
    if(!user){
        return done(null, none, {message: 'Usuario no registrado'});
    }else{
        let compara = await user.matchPassword(password);
        if(compara){
            return done(null, {id: user.id, nombre: user.nombre});
        }else{
            return done(null, false, {message: 'Contraseña incorrecta'});
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((userId, done) => {
    User.findById(userId)
        .then((user) => {
            done(null, user);
        })
        .catch((err) => done(err))
});
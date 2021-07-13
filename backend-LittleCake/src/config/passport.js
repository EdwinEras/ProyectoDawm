const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User')

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done)=>{
    let user = await User.findOne({email: email});
    if(!user){
        return done(null, sone, {message: 'Usuario no registrado'});
    }else{
        let compara = await user.matchPassword(password);
        if(compara){
            return done(null, user);
        }else{
            return done(null, false, {message: 'Contraseña incorrecta'});
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
})
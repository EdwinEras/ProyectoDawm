const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('./../sqlConexion');
const bcrypt = require('bcryptjs');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done)=>{
    let response = pool.query("select * from usuario where email = $1", [email]);
    if(response.rows.length > 0){
        let user = response.rows[0];
        let compara = await bcrypt.compare(password, user.contrasena);
        if(compara){
            return done(null, {id: user.idusuario, nombre: user.nombre});
        }else{
            return done(null, false, {message: 'Contraseña incorrecta'});
        }
    }else{
        return done(null, none, {message: 'Usuario no registrado'});
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.idusuario);
});

passport.deserializeUser((userId, done) => {
    let response = pool.query("select * from usuario where idusuario = $1", [userId]);
    if(response.rows.length > 0){
        return done(null, response.rows[0])
    }
});
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('./../sqlConexion');
const bcrypt = require('bcryptjs');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done)=>{
    let query = {
        text:"select * from usuario where email = $1", 
        values:[email]
    }
    await pool.query(query, async (err, response) =>{
        if(err){
            console.log("Error al buscar en db: " + err.stack);
            res.send("Ha ocurrido un error en la base de datos");
        }else{
            console.log(response.rows);
            if(response.rows.length > 0){
                let user = response.rows[0];
                console.log("usuario: ",user);
                let compara = await bcrypt.compare(password, user.contrasena);
                console.log("compara: ",compara);
                if(compara){
                    return done(null, user);
                }else{
                    return done(null, false, {message: 'Contraseña incorrecta'});
                }
            }else{
                return done(null, none, {message: 'Usuario no registrado'});
            }
        }
    });
}));

passport.serializeUser((user, done) => {
    done(null, user.idusuario);
});

passport.deserializeUser( async (userId, done) => {
    let query = {
        text: "select * from usuario where idusuario = $1", 
        values: [userId]
    }
    await pool.query(query, (err, response) => {
        console.log("response =>" + response);
        done(err, response.rows[0])
    });
});
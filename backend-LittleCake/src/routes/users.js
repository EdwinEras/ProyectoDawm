const router = require('express').Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const pool = require('./../sqlConexion');


router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.send(req.user);
});

router.post('/registro', async (req, res)=>{
    let nombre = req.body.nombre; 
    let apellido = req.body.apellido; 
    let email = req.body.email;
    let password = req.body.password;
    let confPass = req.body.confPass;
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
        errors.push({text: "Porfavor complete las contraseñas"});
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
        let query = {
            text: "select * from usuario where email = $1", 
            values: [email]
        }
        await pool.query(query, async (err, response)=>{
            if(err){
                console.log("Error al buscar en db: " + err.stack);
                res.send("Ha ocurrido un error en la base de datos");
            }else{
                if(response.rows.length > 0){
                    console.log(response.rows);
                    req.flash('error_msg', 'Usuario ya se encuentra registrado');
                    res.send("Error: usuario ya estaba registrado");
                }else{
                    let salt = await bcrypt.genSalt(10);
                    console.log(salt);
                    let hash = await bcrypt.hash(password, salt);
                    console.log(hash);
                    let query2 = {
                        text: "insert into usuario(nombre, apellido, email, contrasena) values($1, $2, $3, $4)", 
                        values: [nombre, apellido, email, hash]
                    }
                    await pool.query(query2, (err, response)=>{
                        if(err){
                            console.log("Error al insertar en db: " + err.stack);
                            res.send("Ha ocurrido un error en la base de datos");
                        }
                        req.flash('success_msg', 'Usuario registrado correctamente');
                        res.send("Correcto: usuario nuevo registrado");
                    });
                    
                }
            }
        });
    }
})

router.get("/logout", (req, res) =>{
    req.logOut();
    res.send("Sesion cerrada exitosamente");
});

module.exports = router;
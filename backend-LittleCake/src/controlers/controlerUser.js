const pool = require('../sqlConexion');
const bcrypt = require('bcryptjs');

let getUsers =  async (req, res) => {
    let response = await pool.query('select * from usuario');
    console.log(response.rows);
    res.json(response.rows);
}

let initSession =  (req, res) => {
    if(req.user["idusuario"]==1){
        res.redirect("http://localhost:4200/a/Dashboard");
    }
    res.redirect("http://localhost:4200/c/Dashboard");
}

let createUser =  async (req, res)=>{
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
                res.json({message: "Ha ocurrido un error en la base de datos"});
            }else{
                if(response.rows.length > 0){
                    console.log(response.rows);
                    req.flash('error_msg', 'Usuario ya se encuentra registrado');
                    res.json({message: "Error: usuario ya estaba registrado"});
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
                            res.json({message: "Ha ocurrido un error en la base de datos"});
                        }else{
                            req.flash('success_msg', 'Usuario registrado correctamente');
                            res.json({message: "Correcto: usuario nuevo registrado"});
                        }
                        
                    });
                    
                }
            }
        });
    }
}

let getUserById =  async (req, res) => {
    let id = req.params.id;
    let response = await pool.query("select * from usuario where idusuario = $1", [id]);
    res.json(response.rows);
}

let deleteUserById =  async (req, res) => {
    let id = req.params.id;
    let response = await pool.query("delete from usuario where idusuario = $1", [id]);
    console.log(response);
    res.json({message:'Usuario eliminado'});
}

let updateUserById =  async (req, res) => {
    let id = req.params.id;
    let telefono = req.params.telefono;
    let dirección = req.params.dirección;
    let response = await pool.query("update usuario set telefono = $a, direccion = $b where idusuario = $c", [telefono, direccion, id]);
    console.log(response);
    res.json({menssage:'Usuario actualizado'});
}

let closeSession = (req, res) =>{
    req.logOut();
    res.json({message: "Sesion cerrada"});
}

module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUserById,
    updateUserById,
    closeSession,
    initSession
};
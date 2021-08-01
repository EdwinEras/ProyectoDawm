let {Pool} = require("pg");

const pool = require('./../sqlConexion');

let getUsers =  async (req, res) => {
    let response = await pool.query('select * from usuario');
    console.log(response.rows);
    res.json(response.rows);
}

let createUser =  async (req, res) => {
    let nombre = req.body.nombre; 
    let apellido = req.body.apellido; 
    let email = req.body.email;
    let password = req.body.password;
    let response = await pool.query(
        "insert into usuario(nombre, apellido, email, contrasena) values($1, $2, $3, $4)", [nombre, apellido, email, password]
    );
    console.log(response);
    res.json({mensaje:'Usuario creado exitosamente'});
};

let getUserById =  async (req, res) => {
    let id = req.params.id;
    let response = await pool.query("select * from usuario where idusuario = $1", [id]);
    res.json(response.rows);
}

let deleteUserById =  async (req, res) => {
    let id = req.params.id;
    let response = await pool.query("delete from usuario where idusuario = $1", [id]);
    console.log(response);
    res.json({mensaje:'Usuario eliminado exitosamente'});
}

let updateUserById =  async (req, res) => {
    let id = req.params.id;
    let telefono = req.params.telefono;
    let dirección = req.params.dirección;
    let response = await pool.query("update usuario set telefono = $a, direccion = $b where idusuario = $c", [telefono, direccion, id]);
    console.log(response);
    res.json({mensaje:'Usuario actualizado exitosamente'});
}

module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUserById,
    updateUserById
};
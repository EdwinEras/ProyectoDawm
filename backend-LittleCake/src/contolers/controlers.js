let {Pool} = require("pg");

const pool = new Pool({
    host = 'localhost',
    user = 'postgres',
    passowrd = 'pass',
    database = 'littlecake',
    port = '5432'
});

let getUsers =  async (res, req) => {
    let response = await pool.query('select * from usuario');
    res.json(response.rows);
}

let createUser =  async (res, req) => {
    let nombre = req.body.nombre; 
    let apellido = req.body.apellido; 
    let email = req.body.email;
    let password = req.body.password;
    let response = await pool.query(
        "insert into usuario(nombre, apellido, email, contrasena) values($a, $b, $c, $d, $e, $f)", [nombre, apellido, email, password]
    );
    console.log(response);
    res.json({mensaje:'Usuario creado exitosamente'});
};

let getUserById =  async (res, req) => {
    let id = req.params.id;
    let response = await pool.query("select id, nombre from usuario where id = $a", [id]);
    res.json(response.rows);
}

let deleteUserById =  async (res, req) => {
    let id = req.params.id;
    let response = await pool.query("delete from usuario where id = $a", [id]);
    console.log(response);
    res.json({mensaje:'Usuario eliminado exitosamente'});
}

let updateUserById =  async (res, req) => {
    let id = req.params.id;
    let telefono = req.params.telefono;
    let dirección = req.params.dirección;
    let response = await pool.query("update usuario set telefono = $a, direccion = $b where id = $c", [telefono, direccion, id]);
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
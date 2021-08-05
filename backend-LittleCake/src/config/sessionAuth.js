const pool = require('./../sqlConexion');

module.exports.isAuthenticated = (res, req, next)=>{
    if(req.isAuthenticated()){
        next();
    }else{
        res.send("Usted no debería estar en esta sección");
    }
};

module.exports.isAdmin = async (res, req, next)=>{
    let idusuario = req.body.idusuario;
    let query = {
        text: "select * from usuario where idusuario = $1 and nombre = admin", 
        values: [idusuario]
    }
    await pool.query(query, (err, response) => {
        if(err){
            res.send("Usted no es admin, no debería estar en esta sección");
        }else{
            console.log(response.rows);
            next();
        }
    });
};
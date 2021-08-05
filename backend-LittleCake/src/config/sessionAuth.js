const pool = require('./../sqlConexion');

module.exports.isAuthenticated = (res, req, next)=>{
    if(req.isAuthenticated()){
        next();
    }else{
        res.send("Usted no debería estar en esta sección");
    }
};

module.exports.isAdmin = (res, req, next)=>{
    let idusuario = req.body.idusuario;
    let response = pool.query("select * from usuario where idusuario = $1 and nombre = admin", [idusuario]);
    if(req.isAuthenticated() && response){
        next();
    }else{
        res.send("Usted no es admin, no debería estar en esta sección");
    }
};
const pool = require('./../sqlConexion');

module.exports.isAuthenticated = (req, res, next)=>{
    if(req.isAuthenticated()){
        console.log("pasa por sessionAuth");
        next();
    }else{
        res.redirect("http://localhost:4200/login");
    }
};

module.exports.isAdmin = async (req, res, next)=>{
    let idusuario = req.body.idusuario;
    let query = {
        text: "select * from usuario where idusuario = $1 and nombre = admin", 
        values: [idusuario]
    }
    await pool.query(query, (err, response) => {
        if(err){
            res.send("http://localhost:4200/login");
        }else{
            console.log(response.rows);
            next();
        }
    });
};
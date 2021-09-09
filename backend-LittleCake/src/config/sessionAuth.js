const pool = require('./../sqlConexion');

module.exports.isAuthenticated = (req, res, next)=>{
    if(req.isAuthenticated()){
        console.log("pasa por sessionAuth");
        next();
    }else{
        res.redirect("/error");
    }
};

module.exports.isAdmin = async (req, res, next)=>{
    
    let idusuario = req.body.idusuario;
    let query = {
        text: "select * from usuario where idusuario = $1", 
        values: [idusuario]
    }
    await pool.query(query, (err, response) => {
        if(err){
            res.send("/error");
        }else{
            console.log(response.rows);
            next();
        }
    });
};
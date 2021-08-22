const pool = require('./../sqlConexion');

let getTestimonio = async (req, res)=>{
    await pool.query("select * from testimonio", (err, response) => {
        if(err){
            console.log("Error al buscar en db: " + err.stack);
            res.json({message: "Ha ocurrido un error en la base de datos"});
        }else{
            console.log(response.rows);
            req.flash('success_msg', 'Ofertas encontrados');
            res.send(response.rows);
        }
    })
}

let createTestimonio = async (req, res) => {
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    let idUsuarios = req.body.idUsuarios;
    let errors =[];
    if(!titulo){
        errors.push({text: 'Debe ingresar el titulo al testimonio'});
    }if(!descripcion){
        errors.push({text: 'Debe ponerle una descripcion al testimonio'});
    }if(!idUsuarios){
        errors.push({text: 'Debe elegir un id de usuario para la testimonio'});
    }if(errors.length > 0 ){
        res.send({errors});
    }else{
        let query = {
            text: "insert into testimonio(titulo, descripcion, idUsuario) values($1,$2,$3)",
            values: [titulo, descripcion, idUsuarios]
        }
        await pool.query(query, (err, response)=>{
            if(err){
                console.log("Error al insertar en db: " + err.stack);
                res.json({message: "Ha ocurrido un error en la base de datos"});
            }else{
                console.log(response.rows);
                req.flash('success_msg', 'Oferta registrada');
                res.json({message: "Testimonio registrada"});
            }
        });
    }
};

let getTestimonioById = async (req, res) => {
    let idTestimonio = req.params.idTestimonio;
    let query = {
        text: "select * from testimonio where idTestimonio = $1",
        values: [idTestimonio]
    }
    await pool.query(query, (err, response) => {
        if(err){
            console.log("Error al insertar en db: " + err.stack);
            res.json({message: "Ha ocurrido un error en la base de datos"});
        }else{
            console.log(response.rows);
            req.flash('success_msg', 'Oferta obtenida');
            res.send(response.rows);
        }
    });
};

let updateTestimonioById = async (req, res) => {
    let idTetimonio = req.params.idTestimonio;
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    console.log(req.body);
    console.log('aqui deberia de ir algo'+idTetimonio);
    let errors =[];
    if(!titulo){
        errors.push({text: 'Debe ponerle un titulo a la testimonio'});
    }if(!descripcion){
        errors.push({text: 'Debe ponerle una descripcion a la testimonio'});
    }if(errors.length > 0 ){
        res.send({errors});
    }else{
        let query = { 
            // update testimonio set descripcion='comid' where idtestimonio='2';
            text: "update testimonio set titulo=$1 ,descripcion=$2 where idtestimonio=$3",
            values: [ titulo,descripcion ,idTetimonio]
        }
        await pool.query(query, (err, response)=>{
            if(err){
                console.log("Error al insertar en db: " + err.stack);
                res.json({message: "Ha ocurrido un error en la base de datos"});
            }else{
                console.log(response.rows);
                req.flash('success_msg', 'Oferta actualizada');
                res.json({message: "Testimonio actualizada"});
            }
        });
    }
};

let deleteTestimonioById = async (req, res)=>{
    let idTestimonio = req.params.idTestimonio;
    let query = {
        text: "delete from testimonio where idTestimonio = $1",
        values: [idTestimonio]
    };
    await pool.query(query, (err, response)=>{
        if(err){
            console.log("Error al eliminar en db: " + err.stack);
            res.json({message: "Ha ocurrido un error en la base de datos"});
        }else{
            console.log(response.rows);
            req.flash('success_msg', 'Oferta eliminada correctamente');
            res.json({message: "Testimonio eliminado"});
        }
    });
}


module.exports = {
    getTestimonioById,
    deleteTestimonioById,
    updateTestimonioById,
    createTestimonio,
    getTestimonio
}
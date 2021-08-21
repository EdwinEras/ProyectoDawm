const pool = require('./../sqlConexion');

let getOfertas = async (req, res)=>{
    await pool.query("select * from oferta", (err, response) => {
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

let createOferta = async (req, res) => {
    let nombre = req.params.nombre;
    let porcentaje = req.params.porcentaje;
    let idcategoria = req.params.idcategoria;
    let errors =[];
    if(!nombre){
        errors.push({text: 'Debe ponerle un nombre a la oferta'});
    }if(!porcentaje){
        errors.push({text: 'Debe ponerle un porcentaje a la oferta'});
    }if(!idcategoria){
        errors.push({text: 'Debe escoger una categoria para la oferta'});
    }if(errors.length > 0 ){
        res.send({errors});
    }else{
        let query = {
            text: "insert into oferta(nombre, porcentaje, idcategoria) values($1,$2,$3)",
            values: [nombre, porcentaje, idcategoria]
        }
        await pool.query(query, (err, response)=>{
            if(err){
                console.log("Error al insertar en db: " + err.stack);
                res.json({message: "Ha ocurrido un error en la base de datos"});
            }else{
                console.log(response.rows);
                req.flash('success_msg', 'Oferta registrada');
                res.json({message: "Oferta registrada"});
            }
        });
    }
};

let getOfertaById = async (req, res) => {
    let idoferta = req.params.idoferta;
    let query = {
        text: "select * from oferta where idoferta = $1",
        values: [idoferta]
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

let updateOfertaById = async (req, res) => {
    let idoferta = req.params.idoferta;
    let nombre = req.params.nombre;
    let porcentaje = req.params.porcentaje;
    let idcategoria = req.params.idcategoria;
    let errors =[];
    if(!nombre){
        errors.push({text: 'Debe ponerle un nombre a la oferta'});
    }if(!porcentaje){
        errors.push({text: 'Debe ponerle un porcentaje a la oferta'});
    }if(!idcategoria){
        errors.push({text: 'Debe escoger una categoria para la oferta'});
    }if(errors.length > 0 ){
        res.send({errors});
    }else{
        let query = {
            text: "update oferta set nombre=$1 porcentaje=$2 idcategoria=$3 where idoferta=$4",
            values: [nombre, porcentaje, idcategoria, idoferta]
        }
        await pool.query(query, (err, response)=>{
            if(err){
                console.log("Error al insertar en db: " + err.stack);
                res.json({message: "Ha ocurrido un error en la base de datos"});
            }else{
                console.log(response.rows);
                req.flash('success_msg', 'Oferta actualizada');
                res.json({message: "Oferta actualizada"});
            }
        });
    }
};

let deleteOfertaById = async (req, res)=>{
    let idoferta = req.params.idoferta;
    let query = {
        text: "delete from oferta where idoferta = $1",
        values: [idoferta]
    };
    await pool.query(query, (err, response)=>{
        if(err){
            console.log("Error al eliminar en db: " + err.stack);
            res.json({message: "Ha ocurrido un error en la base de datos"});
        }else{
            console.log(response.rows);
            req.flash('success_msg', 'Oferta eliminada correctamente');
            res.json({message: "Oferta eliminada"});
        }
    });
}

module.exports = {
    getOfertas,
    createOferta,
    getOfertaById,
    updateOfertaById,
    deleteOfertaById
}
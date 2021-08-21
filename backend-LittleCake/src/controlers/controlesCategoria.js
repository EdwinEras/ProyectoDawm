const pool = require('./../sqlConexion');

let getCategorias = async (req, res)=>{
    await pool.query("select * from categoria", (err, response) => {
        if(err){
            console.log("Error al buscar en db: " + err.stack);
            res.json({message: "Ha ocurrido un error en la base de datos"});
        }else{
            console.log(response.rows);
            req.flash('success_msg', 'Categorias encontrados');
            res.send(response.rows);
        }
    })
};

let createCategoria = async (req, res) => {
    let nombre = req.params.nombre;
    let errors =[];
    if(!nombre){
        errors.push({text: 'Debe ponerle un nombre a la categoria'});
    }if(errors.length > 0 ){
        res.send({errors});
    }else{
        let query = {
            text: "insert into categoria(nombre) values($1)",
            values: [nombre]
        }
        await pool.query(query, (err, response)=>{
            if(err){
                console.log("Error al insertar en db: " + err.stack);
                res.json({message: "Ha ocurrido un error en la base de datos"});
            }else{
                console.log(response.rows);
                req.flash('success_msg', 'Categoria registrada');
                res.json({message: "Categoria registrada"});
            }
        });
    }
};

let getCategoriaById = async (req, res) =>{
    let idcategoria = req.params.idcategoria;
    let query = {
        text: "select * from categoria where idcategoria = $1",
        values: [idcategoria]
    }
    await pool.query(query, (err, response) => {
        if(err){
            console.log("Error al insertar en db: " + err.stack);
            res.json({message: "Ha ocurrido un error en la base de datos"});
        }else{
            console.log(response.rows);
            req.flash('success_msg', 'Categoria obtenida');
            res.send(response.rows);
        }
    });
};

let updateCategoriaById = async (req, res) => {
    let idcategoria = req.params.idcategoria;
    let nombre = req.params.nombre;
    let errors = [];
    if(!nombre){
        errors.push({text: 'Debe ponerle un nombre a la oferta'});
    }if(errors.length > 0){
        res.send({errors});
    }else{
        let query = {
            text: "update categoria set nombre=$1 where idcategoria=$2",
            values: [nombre, idcategoria]
        }
        await pool.query(query, (err, response)=>{
            if(err){
                console.log("Error al insertar en db: " + err.stack);
                res.json({message: "Ha ocurrido un error en la base de datos"});
            }else{
                console.log(response.rows);
                req.flash('success_msg', 'Categoria actualizada');
                res.json({message: "Categoria actualizada"});
            }
        });
    }
};

let deleteCategoria = async (req, res)=>{
    let idcategoria = req.params.idcategoria;
    let query = {
        text: "delete from categoria where idcategoria = $1",
        values: [idcategoria]
    };
    await pool.query(query, (err, response)=>{
        if(err){
            console.log("Error al eliminar en db: " + err.stack);
            res.json({message: "Ha ocurrido un error en la base de datos"});
        }else{
            console.log(response.rows);
            req.flash('success_msg', 'Categoria eliminada correctamente');
            res.json({message: "Categoria eliminada"});
        }
    });
}

module.exports = {
    getCategorias,
    getCategoriaById,
    createCategoria,
    deleteCategoria,
    updateCategoriaById
}
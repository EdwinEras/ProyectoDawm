const pool = require('./../sqlConexion');

let getCompras = (req, res)=>{
    await pool.query("select * from compra", (err, response) => {
        if(err){
            console.log("Error al buscar en db: " + err.stack);
            res.json({message: "Ha ocurrido un error en la base de datos"});
        }else{
            console.log(response.rows);
            req.flash('success_msg', 'Compras encontrados');
            res.send(response.rows);
        }
    })
}

let createCompra = async (req, res)=>{
    let idusuario = req.body.idusuario;
    let iddetallecompra = req.body.iddetallecompra;
    let fecha = req.body.fecha;
    let errors = [];
    if(!iddetallecompra){
        errors.push({text: 'Debe elegir productos para hacer una compra'});
    }
    if(!fecha){
        errors.push({text: 'Debo recibir una fecha para la compra'});
    }
    if(errors.length > 0 ){
        res.send({errors});
    }else{
        let query = {
            text: "insert into compra(idusuario, iddetallecompra, fecha, entregado) values($1,$2,$3, false)",
            values: [idusuario, iddetallecompra, fecha]
        }
        await pool.query(query, (err, response)=>{
            if(err){
                console.log("Error al insertar en db: " + err.stack);
                res.json({message: "Ha ocurrido un error en la base de datos"});
            }else{
                console.log(response.rows);
                req.flash('success_msg', 'Compra realizada');
                res.json({message: "Compra realizada, se entregará en 30 min"});
            }
        });
    }
}

let getCompraById = async (req, res)=>{
    let idcompra = req.params.idcompra;
    let query = {
        text: "select * from compra where idcompra = $1",
        values: [idcompra]
    }
    await pool.query(query, (err, response) => {
        if(err){
            console.log("Error al buscar en db: " + err.stack);
            res.json({message: "Ha ocurrido un error en la base de datos"});
        }else{
            console.log(response.rows);
            req.flash('success_msg', 'Compra encontrado');
            res.send(response.rows);
        }
    })
}

let getCompraByUser = async (req, res)=>{
    let idusuario = req.params.idusuario;
    let query = {
        text: "select * from compra where idusuario = $1",
        values: [idusuario]
    }
    await pool.query(query, (err, response) => {
        if(err){
            console.log("Error al buscar en db: " + err.stack);
            res.json({message: "Ha ocurrido un error en la base de datos"});
        }else{
            console.log(response.rows);
            req.flash('success_msg', 'Compras del usuario encontrado');
            res.send(response.rows);
        }
    })
}

let updateCompra = async (req, res)=>{
    let idcompra = req.params.idcompra;
    let iddetallecompra = req.body.iddetallecompra;
    let fecha = req.body.fecha;
    let errors = [];
    if(!iddetallecompra){
        errors.push({text: 'Debe elegir productos para hacer una compra'});
    }
    if(!fecha){
        errors.push({text: 'Debo recibir una fecha para la compra'});
    }
    if(errors.length > 0 ){
        res.send({errors});
    }else{
        let query = {
            text: "update compra set iddetallecompra=$1, fecha=$2) values($1,$2) where idCompra = $3",
            values: [iddetallecompra, fecha, idcompra]
        };
        await pool.query(query, (err, response)=>{
            if(err){
                console.log("Error al actualizar en db: " + err.stack);
                res.json({message: "Ha ocurrido un error en la base de datos"});
            }else{
                console.log(response.rows);
                req.flash('success_msg', 'Producto actualizado correctamente');
                res.json({message: "Producto actualizado"});
            }
        });
    }
}

let deleteCompra = async (req, res)=>{
    let idcompra = req.params.idcompra;
    let query = {
        text: "delete from compra where idcompra = $1",
        values: [idcompra]
    };
    await pool.query(query, (err, response)=>{
        if(err){
            console.log("Error al eliminar en db: " + err.stack);
            res.json({message: "Ha ocurrido un error en la base de datos"});
        }else{
            console.log(response.rows);
            req.flash('success_msg', 'Compra eliminada correctamente');
            res.json({message: "Compra eliminada"});
        }
    });
}

module.exports = {
    getCompras,
    getCompraById,
    getCompraByUser,
    createCompra,
    updateCompra,
    deleteCompra
}
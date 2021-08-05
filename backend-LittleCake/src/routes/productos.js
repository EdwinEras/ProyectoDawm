const router = require('express').Router();
const pool = require('./../sqlConexion');
const isAdmin = require('./../config/sessionAuth').isAdmin;

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

router.post('/producto', isAdmin, async (req, res)=>{
    let idusuario = req.body.idusuario;
    let nombre = req.body.nombre;
    let categoria = req.body.categoria;
    let descripcion = req.body.descripcion;
    let cantidad = req.body.cantidad;
    let precio = req.body.precio;
    let imagen = req.body.imagen;
    let errors = [];
    if(!nombre){
        errors.push({text: 'Debe escribir un nombre'});
    }
    if(!categoria){
        errors.push({text: 'Debe escribir una categoria'});
    }
    if(!descripcion){
        errors.push({text: 'Debe escribir una descripcion'});
    }
    if(!cantidad){
        errors.push({text: 'Debe escribir la cantidad'});
    }
    if(!precio){
        errors.push({text: 'Debe escribir el precio'});
    }
    if(!imagen){
        errors.push({text: 'Debe incluir una imagen'});
    }
    if(errors.length > 0 ){
        res.send({
            errors, 
            nombre,
            categoria, 
            descripcion, 
            cantidad, 
            precio
        });
    }else{
        let query = {
            text: "insert into producto(nombre, categoria, descripcion, cantidad, precio, imagen, idusuario) values($1,$2,$3,$4,$5,$6,$7)",
            values: [nombre,categoria,descripcion,cantidad,precio,imagen,idusuario]
        };
        await pool.query(query, (err, response)=>{
            if(err){
                console.log("Error al insertar en db: " + err.stack);
                res.send("Ha ocurrido un error en la base de datos");
            }else{
                console.log(response.rows);
                req.flash('success_msg', 'Producto registrado correctamente');
                res.send("Producto ingresado correctamente");
            }
        });
    }
});

router.get('/productos', async (req, res)=>{
    await pool.query("select * from producto", (err, response) => {
        if(err){
            console.log("Error al buscar en db: " + err.stack);
            res.send("Ha ocurrido un error en la base de datos");
        }else{
            console.log(response.rows);
            req.flash('success_msg', 'Productos encontrados');
            res.send(response.rows);
        }
    })
});

router.get('/producto/:idproducto', isAdmin, async (req, res)=>{
    let idproducto = req.params.idproducto;
    let query = {
        text: "select * from producto where idproducto = $1",
        values: [idproducto]
    }
    await pool.query(query, (err, response) => {
        if(err){
            console.log("Error al buscar en db: " + err.stack);
            res.send("Ha ocurrido un error en la base de datos");
        }else{
            console.log(response.rows);
            req.flash('success_msg', 'Producto encontrado');
            res.send(response.rows);
        }
    })
});

router.put('/producto/:idproducto', isAdmin, async (req, res)=>{
    let nombre = req.body.nombre;
    let categoria = req.body.categoria;
    let descripcion = req.body.descripcion;
    let cantidad = req.body.cantidad;
    let precio = req.body.precio;
    let imagen = req.body.imagen;
    let errors = [];
    if(!nombre){
        errors.push({text: 'Debe escribir un nombre'});
    }
    if(!categoria){
        errors.push({text: 'Debe escribir una categoria'});
    }
    if(!descripcion){
        errors.push({text: 'Debe escribir una descripcion'});
    }
    if(!cantidad){
        errors.push({text: 'Debe escribir la cantidad'});
    }
    if(!precio){
        errors.push({text: 'Debe escribir el precio'});
    }
    if(!imagen){
        errors.push({text: 'Debe incluir una imagen'});
    }
    if(errors.length > 0 ){
        res.send({
            errors, 
            nombre,
            categoria, 
            descripcion, 
            cantidad, 
            precio
        });
    }else{
        let query = {
            text: "update producto set nombre=$1, categoria=$2, descripcion=$3, cantidad=$4, precio=$5, imagen=$6) values($1,$2,$3,$4,$5,$6)",
            values: [nombre,categoria,descripcion,cantidad,precio,imagen]
        };
        await pool.query(query, (err, response)=>{
            if(err){
                console.log("Error al actualizar en db: " + err.stack);
                res.send("Ha ocurrido un error en la base de datos");
            }else{
                console.log(response.rows);
                req.flash('success_msg', 'Producto actualizado correctamente');
                res.send("Producto actualizado correctamente");
            }
        });
    }
});

router.delete('/producto/:idproducto', isAdmin, async (req, res)=>{
    let idproducto = req.params.idproducto;
    let query = {
        text: "delete producto where idproducto = $1",
        values: [idproducto]
    };
    await pool.query(query, (err, response)=>{
        if(err){
            console.log("Error al actualizar en db: " + err.stack);
            res.send("Ha ocurrido un error en la base de datos");
        }else{
            console.log(response.rows);
            req.flash('success_msg', 'Producto eliminado correctamente');
            res.send("Producto eliminado correctamente");
        }
    });
});

module.exports = router;
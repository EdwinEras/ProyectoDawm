const router = require('express').Router();
const Producto = require('../models/Producto');

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

router.post('/producto', async (req, res)=>{
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    let cantidad = req.body.cantidad;
    let precio = req.body.precio;
    //let imagen = req.body.imagen;
    let errors = [];
    if(!titulo){
        errors.push({text: 'Debe escribir un titulo'});
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
    if(errors.length > 0 ){
        res.send({
            errors, 
            titulo, 
            descripcion
        });
    }else{
        let nuevoProducto = new Producto({titulo, descripcion, cantidad, precio});
        await nuevoProducto.save();
        req.flash('success_msg', 'Producto registrado correctamente');
        res.redirect('/productos');
    }
});

router.get('/productos', async (req, res)=>{
    let productos = await (Producto.find().lean()).sort({fecha: 'desc'});
    console.log(productos);
    res.send(productos);
});

router.get('/producto/:id', async (req, res)=>{
    let producto = await Producto.findById(req.params.id).lean();
    res.send(producto);
});

router.put('/producto/:id', async (req, res)=>{
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    let cantidad = req.body.cantidad;
    let precio = req.body.precio;
    //let imagen = "";
    //if(req.body.imagen != null){imagen = req.body.imagen;}
    await Producto.findByIdAndUpdate(req.params.id, {titulo, descripcion, cantidad, precio});
    req.flash('success_msg', 'Producto actualizado correctamente');
    res.redirect('/productos');
});

router.delete('/producto/:id', async (req, res)=>{
    await Producto.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Producto eliminado correctamente');
    res.redirect('/productos');
});

module.exports = router;
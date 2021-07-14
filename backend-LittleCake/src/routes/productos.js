const router = require('express').Router();
const Producto = require('../models/Producto');

router.get('/anadirProducto', (req, res)=>{
    res.render('nuevoProducto');
});

router.post('/nuevoProducto', async (req, res)=>{
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    let cantidad = req.body.cantidad;
    let precio = req.body.precio;
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

router.get('/editarProducto/:id', async (req, res)=>{
    let producto = await Producto.findById(req.params.id).lean();
    res.send(producto);
});

router.put('/editarProducto/:id', async (req, res)=>{
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    let cantidad = req.body.cantidad;
    let precio = req.body.precio;
    await Producto.findByIdAndUpdate(req.params.id, {titulo, descripcion, cantidad, precio});
    req.flash('success_msg', 'Producto actualizado correctamente');
    res.redirect('/productos');
});

router.delete('/eliminarProducto/:id', async (req, res)=>{
    await Producto.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Producto eliminado correctamente');
    res.redirect('/productos');
});

module.exports = router;
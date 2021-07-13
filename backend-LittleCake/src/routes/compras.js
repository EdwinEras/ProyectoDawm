const router = require('express').Router();
const Compra = require('../models/Compra');
const passport = require('passport');

router.get('/tienda', (req, res)=>{
    res.render('nuevaCompra', {title: 'tienda'});
});

router.post('/nuevaCompra', async (req, res)=>{
    let cliente = req.user;
    let productos = []
    productos = req.body.productos;
    let errors = [];
    if(!cliente){
        errors.push({text: 'Debe estar registrado para hacer una compra'});
    }
    if(!productos){
        errors.push({text: 'Debe elegir productos para hacer una compra'});
    }
    if(errors.length > 0 ){
        res.render('nuevaCompra', {
            errors, 
            cliente, 
            productos
        });
    }else{
        let nuevaCompra = new Noticia({cliente, productos});
        await nuevaCompra.save();
        req.flash('success_msg', 'Noticia registrada correctamente');
        res.redirect('/compras');
    }
});

router.get('/compras', async (req, res)=>{
    let compras = await (Compra.find({cliente: req.user}).lean()).sort({fecha: 'desc'});
    res.render('compras', {compras});
});

router.delete('/eliminarCompra/:id', async (req, res)=>{
    await Compra.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Compra eliminada correctamente');
    res.redirect('/compras');
});

module.exports = router;
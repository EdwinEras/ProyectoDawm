const router = require('express').Router();
const Compra = require('../models/Compra');
const pool = require('./../sqlConexion');
const isAuthenticated = require('./../config/sessionAuth').isAuthenticated;

router.get('/compras', (req, res)=>{
    res.render('nuevaCompra', {title: 'tienda'});
});

router.post('/compras', async (req, res)=>{
    let idusuario = req.body.idusuario;
    let productos = req.body.productos;
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
        let nuevaCompra = new Compra({cliente, productos});
        await nuevaCompra.save();
        req.flash('success_msg', 'Noticia registrada correctamente');
        res.redirect('/compras');
    }
});

router.get('/compra/:idcompra', isAuthenticated, async (req, res)=>{
    let compras = await (Compra.find({cliente: req.user}).lean()).sort({fecha: 'desc'});
    res.render('compras', {compras});
});

router.put('/compra/:idcompra', isAuthenticated, async (req, res)=>{
    let compras = await (Compra.find({cliente: req.user}).lean()).sort({fecha: 'desc'});
    res.render('compras', {compras});
});

router.delete('/compra/:idcompra', isAuthenticated, async (req, res)=>{
    await Compra.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Compra eliminada correctamente');
    res.redirect('/compras');
});

module.exports = router;
    const router = require('express').Router();
const Testimonio = require('../models/Testimonio');

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

router.post('/testimonio', async (req, res)=>{
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    let errors = [];
    if(!titulo){
        errors.push({text: 'Debe escribir un titulo'});
    }
    if(!descripcion){
        errors.push({text: 'Debe escribir una descripcion'});
    }
    if(errors.length > 0 ){
        res.send({
            errors, 
            titulo, 
            descripcion
        });
    }else{
        let nuevoTestimonio = new Testimonio({titulo, descripcion});
        await nuevoTestimonio.save();
        req.flash('success_msg', 'Testimonio registrado correctamente');
        res.redirect('/testimonios');
    }
});

router.get('/testimonios', async (req, res)=>{
    let testimonios = await (Testimonio.find().lean()).sort({fecha: 'desc'});
    res.send(testimonios);
});

router.get('/testimonio/:id', async (req, res)=>{
    let testimonio = await Testimonio.findById(req.params.id).lean();
    res.send(testimonio);
});

router.put('/testimonio/:id', async (req, res)=>{
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    await Testimonio.findByIdAndUpdate(req.params.id, {titulo, descripcion});
    req.flash('success_msg', 'Testimonio actualizado correctamente');
    res.redirect('/testimonios');
});

router.delete('/testimonio/:id', async (req, res)=>{
    await Testimonio.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Testimonio eliminado correctamente');
    res.redirect('/testimonios');
});

module.exports = router;
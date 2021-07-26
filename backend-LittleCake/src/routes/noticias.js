const router = require('express').Router();
const Noticia = require('../models/Noticia');

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

router.post('/noticia', async (req, res)=>{
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    let imagen = req.body.imagen;
    let errors = [];
    if(!titulo){
        errors.push({text: 'Debe escribir un titulo'});
    }
    if(!descripcion){
        errors.push({text: 'Debe escribir una descripcion'});
    }
    if(!imagen){
        errors.push({text: 'Debe incluir una imagen'});
    }
    if(errors.length > 0 ){
        res.send({
            errors, 
            titulo, 
            descripcion, 
            imagen
        });
    }else{
        let nuevaNoticia = new Noticia({titulo, descripcion, imagen});
        await nuevaNoticia.save();
        req.flash('success_msg', 'Noticia registrada correctamente');
        res.redirect('/noticias');
    }
});

router.get('/noticias', async (req, res)=>{
    let noticias = await (Noticia.find().lean()).sort({fecha: 'desc'});
    res.send(noticias);
});

router.get('/noticia/:id', async (req, res)=>{
    let noticia = await Noticia.findById(req.params.id).lean();
    res.send(noticia);
});

router.put('/noticia/:id', async (req, res)=>{
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    let imagen = req.body.imagen;
    await Noticia.findByIdAndUpdate(req.params.id, {titulo, descripcion, imagen});
    req.flash('success_msg', 'Noticia actualizada correctamente');
    res.redirect('/noticias');
});

router.delete('/noticia/:id', async (req, res)=>{
    await Noticia.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Noticia eliminada correctamente');
    res.redirect('/noticias');
});

module.exports = router;
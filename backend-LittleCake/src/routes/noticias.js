const router = require('express').Router();
const Noticia = require('../models/Noticia');

router.get('/anadir', (req, res)=>{
    res.render('nuevaNoticia');
});

router.post('/nuevaNoticia', async (req, res)=>{
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
        let nuevaNoticia = new Noticia({titulo, descripcion});
        await nuevaNoticia.save();
        req.flash('success_msg', 'Noticia registrada correctamente');
        res.redirect('/noticias');
    }
});

router.get('/noticias', async (req, res)=>{
    let noticias = await (Noticia.find().lean()).sort({fecha: 'desc'});
    res.send(noticias);
});

router.get('/editar/:id', async (req, res)=>{
    let noticia = await Noticia.findById(req.params.id).lean();
    res.send(noticia);
});

router.put('/editar/:id', async (req, res)=>{
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    await Noticia.findByIdAndUpdate(req.params.id, {titulo, descripcion});
    req.flash('success_msg', 'Noticia actualizada correctamente');
    res.redirect('/noticias');
});

router.delete('/eliminar/:id', async (req, res)=>{
    await Noticia.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Noticia eliminada correctamente');
    res.redirect('/noticias');
});

module.exports = router;
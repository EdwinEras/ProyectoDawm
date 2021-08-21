const router = require('express').Router();
const Noticia = require('../models/Noticia');
const mongoose = require('mongoose');

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//MODIFICAR
router.post('/Noticia', async (req, res)=>{
    // console.log(req.body);
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    let _id = new mongoose.Types.ObjectId;
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
        let nuevaNoticia = new Noticia({_id,titulo, descripcion});
        await nuevaNoticia.save();
        res.json({ message: 'Agregada con exito'});    
    }
});


// VALE
router.get('/Noticia', async (req, res)=>{
    let noticias = await (Noticia.find().lean()).sort({fecha: 'desc'});
    res.send(noticias);
});
//VALE
router.get('/Noticia/:id', async (req, res)=>{
    let noticia = await Noticia.findById(req.params.id).lean();
    res.send(noticia);
});

//MODIFICAR
router.put('/Noticia/:id', async (req, res)=>{
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    await Noticia.findByIdAndUpdate(req.params.id, {titulo, descripcion});
    res.json({ message: 'Actualizada con exito'});
});
router.delete('/Noticia/:id', async (req, res)=>{
    await Noticia.findByIdAndDelete(req.params.id);
    res.json({ message: 'Actualizada con exito'});

});

module.exports = router;

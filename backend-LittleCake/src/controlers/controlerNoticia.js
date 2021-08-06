const Noticia = require('../models/Noticia');

let createNoticia = async (req, res)=>{
    let idusuario = req.body.idusuario;
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
        });
    }else{
        let nuevaNoticia = new Noticia({idusuario, titulo, descripcion, imagen});
        await nuevaNoticia.save();
        req.flash('success_msg', 'Noticia registrada correctamente');
        res.json({message: "Noticia nueva creada"});
    }
}

let getNoticias = async (req, res)=>{
    let noticias = await (Noticia.find().lean()).sort({fecha: 'desc'});
    res.send(noticias);
}

let getNoticiaById = async (req, res)=>{
    let noticia = await Noticia.findById(req.params.id).lean();
    res.send(noticia);
}

let updateNoticia = async (req, res)=>{
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    let imagen = req.body.imagen;
    await Noticia.findByIdAndUpdate(req.params.id, {titulo, descripcion, imagen});
    req.flash('success_msg', 'Noticia actualizada correctamente');
    res.json({message: "Noticia actualizada"});
}

let deleteNoticia = async (req, res)=>{
    await Noticia.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Noticia eliminada correctamente');
    res.json({message: "Noticia eliminada"});
}

module.exports = {
    createNoticia,
    getNoticias,
    getNoticiaById,
    updateNoticia,
    deleteNoticia
}
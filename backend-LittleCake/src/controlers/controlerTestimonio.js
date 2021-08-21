
const Testimonio = require('../models/Testimonio');

let createTestimonio = async (req, res)=>{
    let idusuario = req.body.idusuario;
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
        let nuevoTestimonio = new Testimonio({idusuario, titulo, descripcion});
        await nuevoTestimonio.save();
        req.flash('success_msg', 'Testimonio registrado correctamente');
        res.json({message: "Testimonio registrado correctamente"});
    }
}

let getTestimonios = async (req, res) => {
    let testimonios = await (Testimonio.find().lean()).sort({fecha: 'desc'});
    res.send(testimonios);
}

let getTestimonioById = async (req, res)=>{
    let testimonio = await Testimonio.findById(req.params.id).lean();
    res.send(testimonio);
}

let updateTestimonio = async (req, res)=>{
    let titulo = req.body.titulo;
    let descripcion = req.body.descripcion;
    await Testimonio.findByIdAndUpdate(req.params.id, {titulo, descripcion});
    req.flash('success_msg', 'Testimonio actualizado correctamente');
    res.json({message: "Testimonio actualizado"});
}

let deleteTestimonio = async (req, res)=>{
    await Testimonio.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Testimonio eliminado correctamente');
    res.json({message: "Testimonio eliminado"});
}

module.exports = {
    createTestimonio,
    getTestimonios,
    getTestimonioById,
    updateTestimonio,
    deleteTestimonio
}
const mongoose = require('mongoose');
const {Schema} = mongoose;

const NoticiaSchema = new Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true},
    fecha: {type: Date, default: Date.now},
    imagen: {type: String, default: ''}
});

module.exports = mongoose.model('Noticia', NoticiaSchema);
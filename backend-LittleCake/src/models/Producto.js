const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductoSchema = new Schema({
    nombre: {type: String, required: true},
    categoria: {type: String, default: 'otros', enum:["panes", "tortas", "bebidas", "postres", "otros"]},
    descripcion: {type: String, required: true},
    cantidad: {type: Number, required: true},
    precio: {type: Number, required: true},
    fecha: {type: Date, default: Date.now},
    imagen: {type: String, default: ''}
});

module.exports = mongoose.model('Producto', ProductoSchema);
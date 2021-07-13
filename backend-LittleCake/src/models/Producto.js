const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductoSchema = new Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true},
    cantidad: {type: Number, required: true},
    precio: {type: Number, required: true},
    fecha: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Producto', ProductoSchema);
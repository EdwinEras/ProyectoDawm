const mongoose = require('mongoose');
const {Schema} = mongoose;

const TestimonioSchema = new Schema({
    _id: {type: Number, required: true},
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true},
    fecha: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Testimonio', TestimonioSchema);
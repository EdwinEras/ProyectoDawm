const mongoose = require('mongoose');
const {Schema} = mongoose;

const TestimonioSchema = new Schema({
    usuario: {
        type: Schema.Types.ObjectId, 
        ref: 'User' ,
        required: true
    },
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true},
    fecha: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Testimonio', TestimonioSchema);
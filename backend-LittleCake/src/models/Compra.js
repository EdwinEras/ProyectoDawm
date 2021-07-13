const mongoose = require('mongoose');
const {Schema} = mongoose;

const CompraSchema = new Schema({
    cliente: {
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    productos: [{
        type: Schema.Types.ObjectId,
        ref: 'Producto'
    }],
    estado: {type: String, default: 'pendiente', enum:['pendiente', 'entregado']},
    fecha: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Compra', CompraSchema);
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const {Schema} = mongoose;

const UserSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
});

UserSchema.methods.encryptPassword = async (password) =>{
    let salt = await bcrypt.genSalt(10);
    let hash = bcrypt.hash(password, salt);
    return hash;
};

UserSchema.methods.matchPassword = async function(password){
    let compara = await bcrypt.compare(password, this.password);
    return compara;
};

module.exports = mongoose.model('User', UserSchema);
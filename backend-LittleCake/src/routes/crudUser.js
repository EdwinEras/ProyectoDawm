const router = require('express').Router();

const {getUsers, createUser, getUserById, deleteUserById, updateUserById, initSession, closeSession} = require("../controlers/controlerUser");

router.get('/users', getUsers); //uso de prueba nada mas 
router.post('/registro', createUser);
router.get('/user/:id', getUserById); //uso de prueba nada mas 
router.post('/login', passport.authenticate('local'), initSession);
router.delete('/user/:id', deleteUserById); //uso de prueba nada mas 
router.put('/perfil/:id', updateUserById);
router.get("/logout", closeSession);

module.exports = router;

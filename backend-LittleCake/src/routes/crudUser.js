const router = require('express').Router();
const passport = require('passport');

const {
    getUsers, 
    createUser, 
    getUserById, 
    deleteUserById, 
    updateUserById, 
    initSession, 
    closeSession
} = require("../controlers/controlerUser");

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

router.get('/users', getUsers); //uso de prueba nada mas 

router.post('/registro', createUser);

router.get('/user/:id', getUserById); //uso de prueba nada mas 

router.post('/login', passport.authenticate('local'), initSession);

router.delete('/user/:id', deleteUserById); //uso de prueba nada mas 

router.put('/perfil/:id', updateUserById);

router.get("/logout", closeSession);

module.exports = router;

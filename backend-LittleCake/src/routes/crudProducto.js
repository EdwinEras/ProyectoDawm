const router = require('express').Router();
const isAdmin = require('./../config/sessionAuth').isAdmin;
const isAuthenticated = require('./../config/sessionAuth').isAuthenticated;

const {
    getProductos, 
    createProducto, 
    getProductoById, 
    deleteProductoById, 
    updateProductoById,
} = require("../controlers/controlerProducto");

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

router.post('/productos', isAdmin, createProducto);

router.get('/productos', isAuthenticated, getProductos);

router.get('/productos/:idproducto', isAuthenticated, getProductoById);

router.put('/productos/:idproducto', isAuthenticated,  updateProductoById);

router.delete('/productos/:idproducto', isAdmin, deleteProductoById);

module.exports = router;
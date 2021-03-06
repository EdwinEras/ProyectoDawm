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

router.post('/productos', createProducto);

router.get('/productos',  getProductos);

router.get('/productos/:idproducto',  getProductoById);

router.put('/productos/:idproducto',  updateProductoById);

router.delete('/productos/:idproducto', deleteProductoById);

module.exports = router;
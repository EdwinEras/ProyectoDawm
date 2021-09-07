const router = require('express').Router();
const isAuthenticated = require('./../config/sessionAuth').isAuthenticated;

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

const {
    getCompras,
    createCompra,
    getCompraById,
    updateCompra,
    deleteCompra
} = require('./../controlers/controlesCompra');

router.get('/compras', isAuthenticated, getCompras);

router.post('/compras', isAuthenticated, createCompra);

router.get('/compra/:idCompra', isAuthenticated, getCompraById);

router.put('/compra/:idCompra', isAuthenticated, updateCompra);

router.delete('/compra/:idCompra', isAuthenticated, deleteCompra);

module.exports = router;
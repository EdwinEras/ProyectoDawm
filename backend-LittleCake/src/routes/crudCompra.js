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

router.get('/compras',  getCompras);

router.post('/compras',  createCompra);

router.get('/compra/:idCompra',  getCompraById);

router.put('/compra/:idCompra',  updateCompra);

router.delete('/compra/:idCompra', deleteCompra);

module.exports = router;
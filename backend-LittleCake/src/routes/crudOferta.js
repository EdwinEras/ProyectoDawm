const router = require('express').Router();
const isAdmin = require('./../config/sessionAuth').isAdmin;

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

const {
//debe llarmase a cada middleware de ofertas luego de crearlas
} = require('./../controlers/controlesOferta');

router.post('/producto', createOferta);

router.get('/productos', getOfertas);

router.get('/producto/:idproducto', getOfertaById);

router.put('/producto/:idproducto', updateOfertaById);

router.delete('/producto/:idproducto', deleteOfertaById);

module.exports = router;
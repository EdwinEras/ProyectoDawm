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
    createOferta,
    getOfertas,
    getOfertaById,
    updateOfertaById,
    deleteOfertaById
} = require('./../controlers/controlesOferta');

router.post('/oferta', isAdmin, createOferta);

router.get('/oferta', getOfertas);

router.get('/oferta/:idoferta', getOfertaById);

router.put('/oferta/:idoferta', isAdmin, updateOfertaById);

router.delete('/oferta/:idoferta', isAdmin, deleteOfertaById);

module.exports = router;
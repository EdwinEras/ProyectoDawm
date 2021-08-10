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
//debe llarmase a cada middleware de categoria luego de crearlas
} = require('./../controlers/controlesCategoria');

router.post('/categoria', createCategoria);

router.get('/categorias', getCategorias);

router.get('/categoria/:idcategoria', getCategoriaById);

router.put('/categoria/:idcategoria', updateCategoriaById);

router.delete('/categoria/:idcategoria', deleteCategoriaById);

module.exports = router;
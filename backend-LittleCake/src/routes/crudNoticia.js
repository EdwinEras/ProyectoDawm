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
    createNoticia,
    getNoticias,
    getNoticiaById,
    updateNoticia,
    deleteNoticia
} = require('./../controlers/controlerNoticia');

router.post('/noticia', createNoticia);

router.get('/noticias', getNoticias);

router.get('/noticia/:idNoticia', getNoticiaById);

router.put('/noticia/:idNoticia', updateNoticia);

router.delete('/noticia/:idNoticia', deleteNoticia);

module.exports = router;
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
    createTestimonio,
    getTestimonios,
    getTestimonioById,
    updateTestimonio,
    deleteTestimonio
} = require('./../controlers/controlerTestimonio');

router.post('/testimonio', createTestimonio);

router.get('/testimonios', getTestimonios); 

router.get('/testimonio/:idTestimonio', getTestimonioById);

router.put('/testimonio/:idTestimonio', updateTestimonio);

router.delete('/testimonio/:idTestimonio', deleteTestimonio); //uso de prueba nada mas

module.exports = router;
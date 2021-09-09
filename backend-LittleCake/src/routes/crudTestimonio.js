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
    getTestimonioById,
    deleteTestimonioById,
    updateTestimonioById,
    createTestimonio,
    getTestimonio
} = require('./../controlers/controlerTestimonio');

router.post('/testimonio', isAuthenticated, createTestimonio);

router.get('/testimonio', isAuthenticated, getTestimonio); 

router.get('/testimonio/:idTestimonio', isAuthenticated, getTestimonioById);

router.put('/testimonio/:idTestimonio', isAuthenticated, updateTestimonioById);

router.delete('/testimonio/:idTestimonio', isAuthenticated, deleteTestimonioById,); 

module.exports = router;
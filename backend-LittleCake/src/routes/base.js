const router = require('express').Router();

router.get('/' , (req, res)=>{
res.json({
    'routes':'Este archivo contiene las definiciones los metodos get,post,put,delete. Cada archivo se centra en una tabla',
    'Controlers':'Este archivo contiene todos los callback de las definiciones de routers. Cada archivo se centra en una tabla',
    'Recomendacion':'Se ordenado con tu codigo y sigue los estandares definidos y ya en practica'
    });
});


module.exports = router;
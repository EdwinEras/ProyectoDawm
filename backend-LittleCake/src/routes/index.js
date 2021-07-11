const router = require('express').Router();

router.get('/', (req, res)=>{
    res.render('index', {title: 'indice', condition: false});
});

module.exports = router;

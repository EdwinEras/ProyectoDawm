const router = require('express').Router();

router.get('/users/signin', (req, res)=>{
    res.send('Singin del proyecto');
});

router.get('/users/signup', (req, res)=>{
    res.send('Singup del proyecto');
});

module.exports = router;
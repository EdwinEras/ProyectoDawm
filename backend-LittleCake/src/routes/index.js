const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('Index del proyecto');
});

module.exports = router;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/littleCake', {
    useCreateIndex: true,
    useNewUrlParser:  true,
    useFindAndModify: false
})
.then(db =>{
    console.log('DB conected');
})
.catch(err =>{
    console.log('DB error: ', error);
})
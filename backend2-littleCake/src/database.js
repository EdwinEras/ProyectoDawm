
/////////////////////////////////////////////
/////////////AUN NO ESTA EN USO/////////////
///////////////////////////////////////////
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/littleCake', {
    useCreateIndex: true,
    useNewUrlParser:  true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
.then(db =>{
    console.log('DB conected');
})
.catch(err =>{
    console.log(`DB error: ${err.message}`);
})


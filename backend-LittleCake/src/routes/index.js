const router = require('express').Router();

const {getUsers} = require("../contolers/controlers");
const {createUser} = require("../contolers/controlers");
const {getUserById} = require("../contolers/controlers");
const {deleteUserById} = require("../contolers/controlers");
const {updateUserById} = require("../contolers/controlers");

router.get('/', (req, res)=>{
    res.render('index');
})

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.delete('/users/:id', deleteUserById);
router.put('/users/:id', updateUserById);

module.exports = router;

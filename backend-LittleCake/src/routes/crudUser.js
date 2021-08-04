const router = require('express').Router();

const {getUsers, createUser, getUserById, deleteUserById, updateUserById} = require("../controlers/controlerUser");

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/user/:id', getUserById);
router.delete('/user/:id', deleteUserById);
router.put('/user/:id', updateUserById);

module.exports = router;

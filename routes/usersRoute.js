const express = require('express')
const router = express.Router()
const createUser = require("../controllers/UserController/createUser")
const deleteUser = require("../controllers/UserController/deleteUser")
const getAllUser = require("../controllers/UserController/getAllUsers")
const getSingleUser = require("../controllers/UserController/getSingleUser")
const updateUser = require("../controllers/UserController/updateUser")


router.post('/users', createUser);
router.get('/users', getAllUser);
router.get('/users/:id', getSingleUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router
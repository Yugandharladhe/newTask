const express = require('express')
const router = express.Router()

const createEndUser = require("../controllers/EndUserController/newEndUser")
const getAllEndUser = require("../controllers/EndUserController/getAllEndUsers")
const getSingleEndUser = require("../controllers/EndUserController/getSingleEndUser")
const updateEndUser = require("../controllers/EndUserController/updateEndUser")
const deleteEndUser = require("../controllers/EndUserController/deleteEndUser")

router.post('/endusers', createEndUser);
router.get('/endusers', getAllEndUser);
router.get('/endusers/:endUserId', getSingleEndUser);
router.put('/endusers/:endUserId', updateEndUser);
router.delete('/endusers/:endUserId', deleteEndUser);

module.exports = router
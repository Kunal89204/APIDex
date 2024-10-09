const express = require('express')
const router = express.Router()
const {createUser, healthCheck} = require("../controllers/user.controllers")

router.get('/api/v1/createUser', createUser)
router.get('/api/v1/healthcheck', healthCheck)

module.exports = router;

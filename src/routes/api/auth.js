const express = require('express')
const router = express.Router();
const AuthController = require('../../controller/api/auth.controller')

router.route("/login").post(AuthController.Login)

module.exports = router

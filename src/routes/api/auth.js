const express = require('express')
const router = express.Router();
const AuthController = require('../../services/auth.service')

router.route("/login").post(AuthController.Login)
router.route("/register").post(AuthController.Register)

module.exports = router

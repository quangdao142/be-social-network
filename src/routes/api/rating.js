const express = require('express')
const router = express.Router();
const RatingController = require('../../services/rating.service')

router.route("/rating").post(RatingController.RatingArray)

module.exports = router

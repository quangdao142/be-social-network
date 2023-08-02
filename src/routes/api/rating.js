const express = require('express')
const router = express.Router();
const RatingController = require('../../controller/api/rating.controller')

router.route("/rating").post(RatingController.RatingArray)

module.exports = router

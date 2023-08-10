const express = require('express')
const router = express.Router();
const InteractionService = require('../../services/interaction.service')

router.route("/like").post(InteractionService.addInteraction)
router.route("/unlike/:id").post(InteractionService.deleteInteraction)

module.exports = router

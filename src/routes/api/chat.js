const express = require('express')
const router = express.Router();
const authMiddleware = require('../../middlewares/auth.middleware');
const { createConversation } = require('../../repositories/conversation.repository');
const Formatter = require("response-format");
const { getMessagesByConversationId } = require('../../repositories/message.repository');


router.route("/start-conversation").post(authMiddleware,
    async (req, res) => {
        try {
            const conversation = await createConversation([req.userId, req.body.userId])
            res.json(Formatter.success(undefined, conversation))
        } catch (err) {
            onsole.log(err);
            res.json(Formatter.badRequest(error));
        }

    })

router.route("/message-by-conversation/:conversationId").get(authMiddleware, async (req, res) => {
    try {
        const messages = await getMessagesByConversationId(req.params.conversationId)
        res.json(Formatter.success(undefined, messages))

    } catch (err) {
        console.log(err);
        res.json(Formatter.badRequest(err));
    }
})

module.exports = router

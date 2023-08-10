const router = require('express').Router()

router.use("/api", require("./api/auth"))
router.use("/api", require("./api/post"))
router.use("/api", require("./api/rating"))
// router.use("/api", require("./api/chat"))
router.use("/api", require("./api/comment"))
router.use("/api", require("./api/interaction"))
router.use("/api", require("./api/chat"))
module.exports = router;

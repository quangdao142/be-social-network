const router = require('express').Router()

router.use("/api", require("./api/auth"))
router.use("/api", require("./api/post"))
router.use("/api", require("./api/rating"))
// router.use("/api", require("./api/chat"))
router.use("/api", require("./api/comment"))
module.exports = router;

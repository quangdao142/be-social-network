const router = require('express').Router()

router.use("/api", require("./api/auth"))
router.use("/api", require("./api/post"))
module.exports = router;

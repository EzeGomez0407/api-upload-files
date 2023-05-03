const { Router } = require("express");
const getImage = require("./getURLImg");
const getFile = require("./getURLFIle");
const getVideo = require("./getURLVideo");

const router = Router();

router.use("/", getFile);
router.use("/", getImage);
router.use("/", getVideo);

module.exports = router;

const { Router } = require("express");
const { homeGet, homePost } = require("../controller/home.controller");

const router = Router();

router.get("/", homeGet);
router.post("/", homePost);




module.exports = router;


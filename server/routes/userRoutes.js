const userController = require("../controller/userController.js");
const router = require("express").Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/setAvatar/:id", userController.setAvatar);
router.get("/allusers/:id",userController.allusers);

module.exports = router;
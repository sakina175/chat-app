const userController = require("../controller/userController.js");
const router = require("express").Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
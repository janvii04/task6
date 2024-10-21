const express = require("express");
const router = express.Router();
const controllers = require("../controllers/index");

router.post("/insert", controllers.userController.insert);
router.get("/getRecord", controllers.userController.getRecord);
router.post("/insertPost",controllers.userController.insertPost);
//router.get("/findPostByUser",controllers.userController.findPostByUser);
router.post("/postMultipleData", controllers. userController.postMultipleData);
module.exports = router;  


const UserService = require('../service/userService');
const express = require('express');
const router = express.Router();


router.delete("/delete/:email", UserService.deleteUser);

router.delete("/delete/all", UserService.deleteAllUser);

router.get("/getAll", UserService.getAllUsers);

router.put("/edit/:email", UserService.editUserAcount);

router.post("/create", UserService.createUser);

router.post("/create", UserService.createUser);

router.post("/login", UserService.loginUser);

module.exports = router;

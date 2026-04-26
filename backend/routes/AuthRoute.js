const express = require("express");
const router = express.Router();

const { Signup , Login } = require("../controllers/AuthController");


//          /auth/signup

router.post("/signup", Signup );

  //          /auth/login
router.post("/login", Login );



module.exports = router;
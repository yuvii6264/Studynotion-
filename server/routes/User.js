const express = require("express")
const router = express.Router()

const {login, signUp, sentOTP, changePassword} = require("../controllers/Auth")
const {resetPassword,resetPasswordToken} = require("../controllers/ResetPassword")
const { auth } = require("../middlewares/auth")

router.post("/login", login)
router.post("/signup", signUp)
router.post("/sendotp", sentOTP)
router.post("/changepassword", auth, changePassword)

router.post("/reset-password-token", resetPasswordToken)
router.post("/reset-password", resetPassword)

module.exports = router
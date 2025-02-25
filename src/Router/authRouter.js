import express from "express"
import { loginValidator, signupValidaor } from "../middlewares/JoiValidator.js"
import { login, renewToken, signup } from "../controller/authController.js"
import { getUserByEmail } from "../models/users/userModel.js"
import { authenticate, isAdmin, refreshAuthenticate } from "../middlewares/authenticate.js"

const router = express.Router()

// login api
router.post("/login", loginValidator, login)

// signup api
router.post("/signup", signupValidaor, signup)

// get user data
router.get("/authenticate", authenticate, getUserByEmail)

// renew the JWT token
router.get("/renewJWT", refreshAuthenticate, renewToken)


export default router

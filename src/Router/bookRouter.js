import express from "express"
import { authenticate, isAdmin } from "../middlewares/authenticate.js"
import { createBookValidator } from "../middlewares/JoiValidator.js"
import { createBook } from "../controller/bookcontroller.js"

const router = express.Router()

router.post("/createBook", authenticate, isAdmin, createBookValidator, createBook)

export default router

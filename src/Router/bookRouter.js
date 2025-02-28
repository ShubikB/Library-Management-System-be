import express from "express"
import { authenticate, isAdmin } from "../middlewares/authenticate.js"
import { createBookValidator } from "../middlewares/JoiValidator.js"
import {
  createBook,
  adminGetAllBooks,
  pubGetBooks,
  deleteBook,
  updateBook,
} from "../controller/bookcontroller.js"
import { updateBookValidator } from "../middlewares/JoiValidator.js"

const router = express.Router()

router.post("/createBook", authenticate, isAdmin, createBookValidator, createBook)

router.get("/adminGetBooks", authenticate, isAdmin, adminGetAllBooks)

router.get("/publicGetBooks", pubGetBooks)

router.put("/updateBook", authenticate, isAdmin, updateBookValidator, updateBook)

router.delete("/deleteBook/:_id", authenticate, isAdmin, deleteBook)

export default router

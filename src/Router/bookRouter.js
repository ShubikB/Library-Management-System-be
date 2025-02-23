import express from "express"
import { createBook } from "../models/books/bookModel"

const router = express.router()

router.post("/createBook", createBook)


export default router

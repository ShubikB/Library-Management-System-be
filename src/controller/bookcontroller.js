import { insertBook } from "../models/books/bookModel.js"

export const createBook = async (req, res, next) => {
  try {
    const book = await insertBook(req.body)
    console.log(book)

    book?._id
      ? res.json({
          status: "success",
          message: "Book created successfully",
          book,
        })
      : next({
          status: 401,
          message: "Book cannot be created!",
        })
  } catch (error) {
    console.log(error)
    next({
      status: 500,
      message: "Error creating book",
    })
  }
}

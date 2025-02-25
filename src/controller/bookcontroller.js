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

export const adminGetAllBooks = async (req, res, next) => {
  try {
    // get  the book
    const books = await getAllBooks()

    res.json({
      status: "success",
      message: "Books list",
      books,
    })
  } catch (error) {
    next({
      status: 500,
      message: "Error creating book",
    })
  }
}

export const pubGetBooks = async (req, res, next) => {
  try {
    // get  the book
    const books = await getAllBooks({
      status: "active",
    })

    res.json({
      status: "success",
      message: "Books list",
      books,
    })
  } catch (error) {
    next({
      status: 500,
      message: "Error creating book",
    })
  }
}

export const updateBookContoller = async (req, res, next) => {
  try {
    // get  the book
    const book = await updateBook(req.body)
    book?._id
      ? res.json({
          status: "success",
          message: "Book updated",
        })
      : next({
          status: 400,
          message: "Book cannot be updated!",
        })
  } catch (error) {
    next({
      status: 500,
      message: "Error creating book",
    })
  }
}
export const deleteBookContoller = async (req, res, next) => {
  try {
    // get  the book
    const _id = req.params._id

    const deletedBook = await deleteBook(_id)

    deletedBook?._id
      ? res.json({
          status: "success",
          message: "Book delted sucessfully",
        })
      : next({
          status: 400,
          message: "Book cannot be deleted!",
        })
  } catch (error) {
    next({
      status: 500,
      message: "Error deleting book",
    })
  }
}

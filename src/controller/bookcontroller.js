import {
  insertBook,
  getAllBooks,
  updateBookQuerry,
  deleteBookQuerry,
} from "../models/books/bookModel.js"

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
      message: "Error getting book",
    })
  }
}

export const getFeaturedBooks = async (req, res, next) => {
  try {
    const books = await getAllBooks({
      isFeatured: "true",
    })

    res.json({
      status: "success",
      message: "Books list",
      books,
    })
  } catch (error) {
    next({
      status: 500,
      message: "Error getting book",
    })
  }
}

export const updateBook = async (req, res, next) => {
  try {
    const { _id, ...updateFields } = req.body 

    if (!_id) {
      return res.status(400).json({ status: "error", message: "Book ID is required" })
    }

    const updatedBook = await updateBookQuerry(_id, updateFields)

    if (updatedBook) {
      res.json({
        status: "success",
        message: "Book updated",
        book: updatedBook,
      })
    } else {
      res.status(404).json({
        status: "error",
        message: "Book not found or could not be updated",
      })
    }
  } catch (error) {
    console.error("Error updating book:", error) 
    res.status(500).json({
      status: "error",
      message: "Error updating book",
      error: error.message,
    })
  }
}

export const deleteBook = async (req, res, next) => {
  try {
    const _id = req.params._id
    const result = await deleteBookQuerry({ _id })

    result
      ? res.json({
          status: "success",
          message: "Book deleted successfully",
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

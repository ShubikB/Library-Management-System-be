import mongoose from "mongoose"

// TODO change the status to IsAvailable
const bookSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      enum: ["academic", "fiction", "non-fiction", "others"],
      default: "others",
    },
    author: {
      type: String,
      required: true,
    },
    isbn: {
      type: String,
      unique: true,
      index: 1,
      required: true,
    },
    publishedYear: {
      type: Number,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    expectedAvailable: {
      type: Date,
      default: null,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Book = mongoose.model("Book", bookSchema)

export const insertBook = (bookObj) => {
  return new Book(bookObj).save()
}

export const getAllBooks = (filter) => {
  return Book.find(filter)
}

export const updateBookQuerry = (_id, updateObj) => {
  console.log(updateObj)
  return Book.findByIdAndUpdate(_id, updateObj, { new: true })
}

export const deleteBookQuerry = (_id) => {
  return Book.deleteOne(_id)
}

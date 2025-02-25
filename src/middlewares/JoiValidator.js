import Joi from "joi"

const joiValidator = (schema, req, res, next) => {
  const { error } = schema.validate(req.body)
  error
    ? res.json({
        status: "error",
        message: error.message,
      })
    : next()
}

export const loginValidator = (req, res, next) => {
  const loginSchema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string(),
  })

  joiValidator(loginSchema, req, res, next)
}

export const signupValidaor = (schema, req, res, next) => {
  const signupSchema = Joi.object({
    fName: Joi.string(),
    lName: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string(),
    phone: Joi.number(),
  })

  joiValidator(signupSchema, req, res, next)
}

export const createBookValidator = (req, res, next) => {
  const bookSchema = Joi.object({
    status: Joi.string().required(),
    title: Joi.string().required(),
    author: Joi.string().required(),
    isbn: Joi.string().required(),
    publishedYear: Joi.number().required(),
    thumbnail: Joi.string().required(),
    description: Joi.string().required(),
    isAvailable: Joi.boolean(),
    expectedAvailable: Joi.date().allow(null),
    averageRating: Joi.number(),
  })

  joiValidator(bookSchema, req, res, next)
  console.log("book Validated")
}

export const updateBookValidator = (req, res, next) => {
  const updateBookSchema = Joi.object({
    title: Joi.string().required(),
    _id: Joi.string().required(),
    author: Joi.string().required(),
    status: Joi.string().required(),
    thumbnail: Joi.string().required(),
    isbn: Joi.string().required(),
    genre: Joi.string().required(),
    publishedYear: Joi.number().required(),
    description: Joi.string(),
    isAvailable: Joi.boolean(),
    expectedAvailable: Joi.string().allow("", null),
  })

  joiValidator(updateBookSchema, req, res, next)
}

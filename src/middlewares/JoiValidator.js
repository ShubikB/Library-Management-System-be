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

import { createUser, getUserByEmail } from "../models/users/userModel.js"
import { compareEncryptText, encryptText } from "../utils/bcrypt.js"
import { JWTsign } from "../utils/jwt.js"

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const userData = await getUserByEmail(email)
    // console.log(userData)
    if (userData) {
      const isLoginSuccess = await compareEncryptText(password, userData.password)
      console.log(isLoginSuccess)

      const tokenData = {
        email: userData.email,
      }
      const token = await JWTsign(tokenData)
      console.log(token)

      if (isLoginSuccess) {
        return res.json({
          status: "success",
          message: "Login Success",
        })
      } else {
        return res.status(401).json({
          status: "Error",
          message: "Invalid Credentials",
        })
      }
    }
  } catch (error) {
    res.json({
      status: "Error",
      message: error.message,
    })
  }
}

export const signup = async (req, res, next) => {
  try {
    const { fName, lName, email, phone, role } = req.body
    let { password } = req.body
    const saltround = 10
    password = await encryptText(password)

    await createUser({
      fName,
      lName,
      email,
      password,
      phone,
      role,
    })

    console.log(req.body)
    return res.json({
      status: "success",
      message: "User created",
    })
  } catch (error) {
    res.json({
      status: "Error",
      message: error.message,
    })
  }
}

export const getUserDetails = () => {
  req.userData.Password = ""
  return res.json({
    status: "Success",
    message: "User Found",
    userData,
  })
}

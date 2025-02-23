import { JWTverify } from "../utils/jwt.js"


export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const decodedData = await JWTverify(token)
    console.log("Decoded", decodedData)

    if (decodedData?.email) {
      const userData = await getUserByEmail(decodedData.email)

      if (userData) {
        req.user = userData
        next()
      } else {
        const errorObj = {
          status: "Error",
          message: "Authentication Failed",
        }
        return res.status(401).send(errorObj)
      }
    } else {
      res.status(401).json({
        status: "error",
        message: "Invalid Token",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Error",
      message: "Verification Failed",
    })
  }
}

export const isAdmin = (req, res, next) => {
  req.user.role === "admin" 
    ? res.json({
        status: "Success",
        message: "Admin: True",
      })
    : res.json({
        status: "Error",
        message: "Admin: False",
      })
}

import jwt from "jsonwebtoken"

export const JWTsign = (signData) => {
  console.log(process.env.JWT_EXPIRESIN)
  return jwt.sign(signData, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRESIN })
}

export const JWTverify = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}

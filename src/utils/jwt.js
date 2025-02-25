import jwt from "jsonwebtoken"
import { insertSessionToken } from "../models/sessions/sesionModel.js"

export const JWTsign = (signData) => {
  const token = jwt.sign(signData, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRESIN,
  })

  insertSessionToken({ token })
  return token
}

export const JWTverify = async (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}

export const RefreshJWTsign = (signData) => {
  return jwt.sign(signData, process.env.REFRESH_JWT_SECRET, {
    expiresIn: process.env.REFRESH_JWT_EXPIRESIN,
  })
}

export const RefreshJWTverify = (token) => {
  return jwt.verify(token, process.env.REFRESH_JWT_SECRET)
}

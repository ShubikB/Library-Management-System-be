import bcrypt from "bcrypt"
let SALT_ROUND = 10

export const encryptText = async (inputText) => {
  return bcrypt.hash(inputText, SALT_ROUND)
}

export const compareEncryptText = async (plainText, encryptText) => {
  return bcrypt.compare(plainText, encryptText)
}

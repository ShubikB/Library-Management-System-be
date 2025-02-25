import mongoose from "mongoose"

const sessionSchema = new mongoose.Schema({
  token: { type: String, required: true },
  associate: { type: String, default: "" },
})

const Session = mongoose.model("Session", sessionSchema)

export const insertSessionToken = (obj) => {
  return new Session(obj).save()
}

export const findSessionToken = async (token) => {
  return await Session.findOne({ token })
}

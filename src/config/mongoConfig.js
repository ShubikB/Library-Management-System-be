import mongoose from "mongoose"

export const connectMongodb = async () => {
  try {
    const connect = await mongoose.connect(`${process.env.MONGO_URL}`)
    console.log("Database Connection Successful")
  } catch (error) {
    console.log("Database Connection Failed")
    console.log(error)
  }
}

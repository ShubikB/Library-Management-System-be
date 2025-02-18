import express from "express"
import cors from "cors"
import { connectMongodb } from "./src/config/mongoConfig.js"
import { createUser } from "./src/models/users/UserSchema.js"
import authRouter from "./src/Router/authRouter.js"

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.get("/", async function (req, res, next) {
  res.json({ message: "Welcome to The Library" })
})

app.use("/api/v1/auth", authRouter)

// app.get("/login", async (req, res, next){
// })

// app.use(errorHandler)

connectMongodb()
  .then(() => {
    console.log("Connected to Database")
    app.listen(port, (error) => {
      error ? console.log(error) : console.log(`Server is running at http://localhost:${port}`)
    })
  })
  .catch((error) => {
    console.log(error)
    console.log("ERROR CONNECTING TO DB")
  })

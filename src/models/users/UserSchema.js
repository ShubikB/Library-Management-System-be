import mongoose from "mongoose"
export const UserSchema = new mongoose.Schema(
  {
    fName: {
      type: String,
      required: true,
    },
    lName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["student", "admin"],
      default: "student",
    },
    refreshJwt: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model("User", UserSchema)

// Create User
export const createUser = (userObj) => {
  return new User(userObj).save()
}

// Find User
export const getUserByEmail = async (email) => {
  return await User.findOne({ email })
}

// Update User
export const updateUser = (filter, updatedUserObject) => {
  return User.findOneAndUpdate(filter, updatedUserObject)
}

//Delete User
export const deleteuserbyID = (_id) => {
  return User.findOneAndDelete({ _id })
}

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: {
        values: ["Admin", "Student", "Trainer"],
        message: "Role must be either Admin or Student",
      },
      default: "Student",
    },
    status: {
      type: String,
      default: "Active",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);

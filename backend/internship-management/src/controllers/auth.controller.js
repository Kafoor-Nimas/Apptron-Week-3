const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!["Admin", "Student"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Validation failed. Role must be either Admin or Student",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message:
          "Validation failed. Password must be at least 6 characters long",
      });
    }

    const existingUser = await userModel.findOne({
      email: email.toLowerCase(),
    });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      error: error.message,
    });
  }
};

module.exports = {
  registerUser,
};

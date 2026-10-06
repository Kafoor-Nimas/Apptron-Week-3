const studentModel = require("../models/student.model");

const getStudents = (req, res) => {
  res.json({
    success: true,
    students: [{ id: "CT-2021-004", name: "Nimas" }],
  });
};

const addStudent = async (req, res) => {
  try {
    const { name, email, phone, course, age } = req.body;

    // Validation check
    if (!name || !email || !phone || !course || !age) {
      return res.status(400).json({
        success: false,
        message: "Validation failed. Please provide all required fields.",
      });
    }
    if (Number(age) < 18) {
      return res.status(400).json({
        success: false,
        message: "Validation failed. Age must be greater than or equal to 18.",
      });
    }

    // Unique email check
    const isExist = await studentModel.findOne({ email: email.toLowerCase() });
    if (isExist) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
      });
    }

    // Create student in mongoDb
    await studentModel.create({
      name,
      email,
      phone,
      course,
      age,
    });

    // Success Response
    return res.status(201).json({
      success: true,
      message: "Student created successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
    });
  }
};

module.exports = {
  getStudents,
  addStudent,
};

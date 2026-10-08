const studentModel = require("../models/student.model");

const getStudents = async (req, res) => {
  try {
    const students = await studentModel.find();

    if (!students || students.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No students found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Students fetched successfully",
      count: students.length,
      data: students,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internel server error",
      error: error.message,
    });
  }
};

const getSingleStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await studentModel.findById(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Student fetched successfully",
      data: student,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
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
        message: "Validation failed. Email already exists.",
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
      error: error.message,
    });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedStudent = await studentModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: updatedStudent,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Validation failed or invalid ID format",
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedStudent = await studentModel.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Student deleted successfully",
      data: deletedStudent,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Validation failed or invalid ID format",
    });
  }
};

module.exports = {
  getStudents,
  addStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent
};

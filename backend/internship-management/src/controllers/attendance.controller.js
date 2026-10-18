const Attendance = require("../models/attendance.model");

const checkIn = async (req, res) => {
  try {
    const studentId = req.user.id;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const existingAttendance = await Attendance.findOne({
      studentId,
      date: { $gte: today },
    });

    if (existingAttendance) {
      return res.status(400).json({
        success: false,
        message: "You have already checked in today.",
      });
    }
    const checkInTime = new Date().toLocaleTimeString();

    const attendance = await Attendance.create({
      studentId,
      date: new Date(),
      checkIn: checkInTime,
      status: "Present",
    });

    return res.status(201).json({
      success: true,
      message: "Check-in successful.",
      data: attendance,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

const checkOut = async (req, res) => {
  try {
    const studentId = req.user.id;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const existingAttendance = await Attendance.findOne({
      studentId,
      date: { $gte: today },
    });

    if (!existingAttendance) {
      return res.status(404).json({
        success: false,
        message: "No active check-in found for today.",
      });
    }

    if (existingAttendance.checkOut) {
      return res.status(400).json({
        success: false,
        message: "You have already checked out today.",
      });
    }

    existingAttendance.checkOut = new Date().toLocaleTimeString();
    await existingAttendance.save();

    return res.status(200).json({
      success: true,
      message: "Check-out successful.",
      data: existingAttendance,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  checkIn,
  checkOut,
};

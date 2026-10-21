const Attendance = require("../models/attendance.model");
const meetingModel = require("../models/meeting.model");
const taskModel = require("../models/task.model");
const userModel = require("../models/user.model");

const getDashboardStats = async (req, res) => {
  try {
    // Setup today's start and end date bounds for filtering
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);

    const [
      totalStudents,
      activeStudents,
      todayAttendance,
      pendingTasks,
      completedTasks,
      todayMeetings,
    ] = await Promise.all([
      userModel.countDocuments({ role: "Student" }),
      userModel.countDocuments({ role: "Student", status: "Active" }),
      Attendance.countDocuments({
        date: { $gte: startOfToday, $lte: endOfToday },
      }),
      taskModel.countDocuments({ status: "Pending" }),
      taskModel.countDocuments({ status: "Completed" }),
      meetingModel.countDocuments({
        meetingDate: { $gte: startOfToday, $lte: endOfToday },
      }),
    ]);

    return res.status(200).json({
      success: true,
      data: {
        totalStudents,
        activeStudents,
        todayAttendance,
        pendingTasks,
        completedTasks,
        todayMeetings,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};

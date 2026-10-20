const meetingModel = require("../models/meeting.model");

const createMeeting = async (req, res) => {
  try {
    const {
      studentId,
      meetingTitle,
      meetingDate,
      meetingTime,
      meetingType,
      meetingLink,
    } = req.body;

    if (
      !studentId ||
      !meetingTitle ||
      !meetingDate ||
      !meetingTime ||
      !meetingLink
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const meeting = await meetingModel.create({
      studentId,
      meetingTitle,
      meetingDate,
      meetingTime,
      meetingType: meetingType || "Online",
      meetingLink,
    });

    return res.status(201).json({
      success: true,
      message: "Meeting scheduled successfully",
      data: meeting,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internel Server Error",
      error: error.message,
    });
  }
};

const getMeetings = async (req, res) => {
  try {
    let query = {};

    // Student can only view their own meetings
    if (req.user.role === "Student") {
      query.studentId = req.user.id;
    }

    const meetings = await meetingModel
      .find(query)
      .populate("studentId", "name email role");

    return res.status(200).json({
      success: true,
      message: "Get meetings successfully",
      count: meetings.length,
      data: meetings,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internel Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  createMeeting,
  getMeetings,
};

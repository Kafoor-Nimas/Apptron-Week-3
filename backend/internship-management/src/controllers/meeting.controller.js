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

const getMeetingsById = async (req, res) => {
  try {
    const meetingId = req.params.id;

    const meeting = await meetingModel
      .findById(meetingId)
      .populate("studentId", "name email role");

    if (!meeting) {
      return res.status(404).json({
        success: false,
        message: "Meeting not found",
      });
    }

    if (
      req.user.role === "Student" &&
      meeting.studentId._id.toString() !== req.user.id
    ) {
      return res.status(403).json({
        success: false,
        message: "Access denied. You can only view your own meetings",
      });
    }

    return res.status(200).json({
      success: true,
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

const updateMeeting = async (req, res) => {
  try {
    const meetingId = req.params.id;

    const meeting = await meetingModel.findById(meetingId);

    if (!meeting) {
      return res.status(404).json({
        success: false,
        message: "Meeting not found",
      });
    }

    const updatedMeeting = await meetingModel.findByIdAndUpdate(
      meetingId,
      req.body,
      { new: true, runValidators: true },
    );

    return res.status(200).json({
      success: true,
      message: "Meeting updated successfully",
      data: updatedMeeting,
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

const deleteMeeting = async (req, res) => {
  try {
    const meetingId = req.params.id;

    const meeting = await meetingModel.findById(meetingId);

    if (!meeting) {
      return res.status(404).json({
        success: false,
        message: "Meeting not found",
      });
    }

    const deletedMeeting = await meetingModel.findByIdAndDelete(meetingId);

    return res.status(200).json({
      success: true,
      message: "Meeting deleted successfully",
      data: deletedMeeting,
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
  getMeetingsById,
  updateMeeting,
  deleteMeeting,
};

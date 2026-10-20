const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    meetingTitle: {
      type: String,
      required: true,
      trim: true,
    },
    meetingDate: {
      type: Date,
      required: true,
    },
    meetingTime: {
      type: String,
      required: true,
    },
    meetingType: {
      type: String,
      enum: ["Online", "Offline"],
      default: "Online",
    },
    meetingLink: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Scheduled", "Ongoing", "Completed", "Cancelled"],
      default: "Scheduled",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Meeting", meetingSchema);

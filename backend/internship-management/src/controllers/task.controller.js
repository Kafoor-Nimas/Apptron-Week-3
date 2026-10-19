const taskModel = require("../models/task.model");

const createTask = async (req, res) => {
  try {
    const { title, description, assignedTo, deadline, priority } = req.body;

    if (!title || !description || !assignedTo || !deadline || !priority) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const task = await taskModel.create({
      title,
      description,
      assignedTo,
      deadline,
      priority: priority || "Medium",
    });

    return res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: task,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  createTask,
};

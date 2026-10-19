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

const getTasks = async (req, res) => {
  try {
    let query = {};

    if (req.user.role === "Student") {
      query.assignedTo = req.user.id;
    }

    const tasks = await taskModel
      .find(query)
      .populate("assignedTo", "name email role");

    return res.status(200).json({
      success: true,
      count: tasks.length,
      message: "Tasks fetched successfully",
      data: tasks,
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

const getTasksById = async (req, res) => {
  try {
    const taskId = req.params.id;

    const task = await taskModel
      .findById(taskId)
      .populate("assignedTo", "name email role");

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    if (
      req.user.role === "Student" &&
      task.assignedTo._id.toString() !== req.user.id
    ) {
      return res.status(403).json({
        success: false,
        message:
          "You are not authorized to view this task, You can only view your own task.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task fetched successfully",
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
  getTasks,
  getTasksById,
};

const getTasks = (req, res) => {
  res.json({
    success: true,
    tasks: [],
  });
};

const addTask = (req, res) => {
  res.json({
    success: true,
    message: "Task Added Successfully",
  });
};

module.exports = {
  getTasks,
  addTask,
};

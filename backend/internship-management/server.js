const express = require("express");
const studentRoutes = require("./src/routes/student.routes");
const taskRoutes = require("./src/routes/task.routes");
const trainerRoutes = require("./src/routes/trainer.routes");
const courseRoutes = require("./src/routes/course.routes");
const logger = require("./src/middleware/logger.middleware");
const errorHandler = require("./src/middleware/error.middleware");

const app = express();

app.use(logger);
app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/trainers", trainerRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/error", (req, res, next) => {
  const error = new Error("This is a test error");
  next(error);
});

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Backend Server Running");
});
app.get("/health", (req, res) => {
  res.json({
    status: "success",
    message: "Server Running Successfully",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

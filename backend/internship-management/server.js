const express = require("express");
const studentRoutes = require("./src/routes/student.routes");
const courseRoutes = require("./src/routes/course.routes");
const taskRoutes = require("./src/routes/task.routes");
const trainerRoutes = require("./src/routes/trainer.routes");

const app = express();

app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/trainers", trainerRoutes);

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

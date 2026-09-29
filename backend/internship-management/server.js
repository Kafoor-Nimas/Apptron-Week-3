const express = require("express");
const studentRoutes = require("./src/routes/student.routes");

const app = express();

app.use("/api/students", studentRoutes);

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

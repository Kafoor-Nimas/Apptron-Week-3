const getCourses = (req, res) => {
  res.json({
    success: true,
    courses: [{ id: 1, name: "React.js" }],
  });
};

const addCourse = (req, res) => {
  res.json({
    success: true,
    message: "Course Added Successfully",
  });
};

module.exports = {
  getCourses,
  addCourse,
};

const getStudents = (req, res) => {
  res.json({
    success: true,
    students: [{ id: "CT-2021-004", name: "Nimas" }],
  });
};

const addStudent = (req, res) => {
  res.json({
    success: true,
    message: "Student Added Successfully",
  });
};

module.exports = {
  getStudents,
  addStudent,
};

const getTrainers = (req, res) => {
  res.json({
    success: true,
    trainers: [{ name: "Ramesh", age: 32 }],
  });
};

const addTrainer = (req, res) => {
  res.json({
    success: true,
    message: "Trainer Added Successfully",
  });
};

module.exports = {
  getTrainers,
  addTrainer,
};

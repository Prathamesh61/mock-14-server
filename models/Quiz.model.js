const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  category: { type: String, require: true },
  type: { type: String, require: true },
  difficulty: { type: String, require: true },
  question: { type: String, require: true },
  correct: { type: String, require: true },
  incorrect: { type: Array, require: true },
});

const QuizModel = mongoose.model("quizQuestion", quizSchema);

module.exports = {
  QuizModel,
};

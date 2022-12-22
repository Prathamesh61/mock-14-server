const { Router } = require("express");
require("dotenv").config();

const { QuizModel } = require("../models/Quiz.model");

const quizRouter = Router();

quizRouter.get("/", async (req, res) => {
  const category = req.query.category;
  const difficulty = req.query.difficulty;
  const num = +(req.query.num);
  const questions = await QuizModel.find({ category, difficulty });
  questions.length = num || 0;
  console.log(category, difficulty, num, questions);
  console.log(questions.length);
  res.send({ "questions": questions });
});

module.exports = {
  quizRouter,
};

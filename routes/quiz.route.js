const { Router } = require("express");
require("dotenv").config();

const { QuizModel } = require("../models/Quiz.model");

const quizRouter = Router();

quizRouter.get("/", async (req, res) => {
  const cat = req.query.cat;
  const diff = req.query.diff;
  const num = Number(req.query.num);
  console.log(cat, diff, num);
  const questions = await QuizModel.find({ category: cat, difficulty: diff });
  questions.length = num || 0;
  console.log(questions.length);
  res.send({ "questions": questions });
});

module.exports = {
  quizRouter,
};

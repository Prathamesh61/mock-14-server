const express = require("express");
const cors = require("cors");
const { quizRouter } = require("./routes/quiz.route");

const { connection } = require("./config/db");

const app = express();


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use(cors());
app.use("/quiz", quizRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (err) {
    console.log("Error connnecting to DB");
    console.log(err);
  }
  console.log(`listening on PORT ${process.env.PORT}`);
});

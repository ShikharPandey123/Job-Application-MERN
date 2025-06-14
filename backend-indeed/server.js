const dotenv = require("dotenv");
dotenv.config();
require("dotenv").config();
const express = require("express");
const connectToDb = require("./db/db");
const app = express();
const port = process.env.PORT || 3000;
const userRouter = require("./routes/userRouter");
const cors = require("cors");

connectToDb();

app.use(express.json());

app.use(cors({
  origin: ["http://localhost:5173","https://job-application-mern-1.onrender.com"],
  credentials: true,
}));


app.get("/", (req, res) => {
  res.send("Hey from new server to restart from git 1");
});

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server running in the ${port}`);
});

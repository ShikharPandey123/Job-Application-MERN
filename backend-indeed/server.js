const dotenv = require("dotenv");
dotenv.config();
require("dotenv").config();
const express = require("express");
const connectToDb = require("./db/db");
const app = express();
const port = process.env.PORT || 3000;
const userRouter = require("./routes/userRouter");
const cors = require("cors");

const allowedOrigins = [
  "http://localhost:5173",
  "https://job-application-mern-1.onrender.com/"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));
app.use(express.json());
connectToDb();

app.get("/", (req, res) => {
  res.send("Hey from new server to restart from git ");
});

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server running in the ${port}`);
});

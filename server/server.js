const path = require("path");
const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/user");
require("./db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.json());
app.use(cors(corsOptions)); // Use this after the variable declaration
app.use(userRouter);

app.get("/", (req, res) => {
  res.send("<h2>This is from server.js file</h2>");
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

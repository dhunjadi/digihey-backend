const express = require("express");
const app = express();
const cors = require("cors");
const authorization = require("./middleware/authorization");
const encoder = require("./encode");

const port = 3000;

const login = require("./login");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.post("/login", login);

app.post("/encode", authorization, (req, res) => {
  const { inputString } = req.body;

  const encodedString = encoder(inputString);

  return res.status(200).json({ encodedString });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

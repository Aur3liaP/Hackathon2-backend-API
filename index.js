const express = require("express");
const cors = require("cors");
const itemsTab = require("./items");
const users = require("./users");
const bodyParser = require("body-parser");

const app = express();

const serverPort = 3310;

app.use(bodyParser.json());

app.use(cors("*")); //middleware
app.use("/static", express.static(__dirname + "/assets"));

app.get("/", (req, res) => {
  res.send("Hello la Dream Team");
});

app.post("/users", (req, res) => {
  const newName = req.body;
  console.log(newName);
  users.push(newName);
  res.status(201).json(newName);
  console.log(users);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/items", (req, res) => {
  res.json(itemsTab);
});

app.get("/items/:id", (req, res) => {
  const itemsId = parseInt(req.params.id);
  console.info(itemsId);
  const items = itemsTab.find((e) => e.id === itemsId);
  console.info(items);
  res.json(items);
});

app.listen(serverPort, () => {
  console.info(`http://localhost:${serverPort}`);
});

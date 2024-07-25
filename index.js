const express = require("express");
const cors = require("cors");
const itemsTab = require("./items");

const app = express();

const serverPort = 3310;

app.use(cors("*")); //middleware

app.get("/", (req, res) => {
    res.send("Hello la Dream Team");
});

app.get("/items", (req,res) => {
    res.json(itemsTab);
});

app.get("/items/:id", (req, res) => {
    const itemsId = parseInt(req.params.id)
    console.info(itemsId);
    const items = itemsTab.find((e) => e.id === itemsId);
    console.info(items);
    res.json(items);
});

app.listen(serverPort, () => {
    console.info(`http://localhost:${serverPort}`);
});
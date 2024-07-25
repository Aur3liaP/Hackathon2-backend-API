const express = require("express");
const cors = require("cors");
const filmsTab = require("./items");

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

// app.get("/characters/:id", (req, res) => {
//     const characterId = parseInt(req.params.id);
//     let character;
//     filmsTab.some(film => {
//         character = film.characters.find((char) => char.id === characterId);
//         return character;
//     });
//     res.json(character);
// });

// app.get("/films/:filmId/characters/:characterId?", (req, res) => {
//     const filmId = parseInt(req.params.filmId);
//     const characterId = req.params.characterId ? parseInt(req.params.characterId) : null;

//     const film = filmsTab.find((e) => e.id === filmId);
//     if (!film) {
//         return res.status(404).json({ error: "Film not found" });
//     }

//     else if (characterId) {
//         const character = film.characters.find((char) => char.id === characterId);
//         if (!character) {
//             return res.status(404).json({ error: "Character not found" });
//         }
//         res.json(character);
//     } else {
//         // Si characterId n'est pas défini, retourner le film entier
//         res.json(film);
//     }
// });

app.listen(serverPort, () => {
    console.info(`http://localhost:${serverPort}`);
});
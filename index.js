const express = require("express");
const cors = require("cors");
const filmsTab = require("./films");

const app = express();

const serverPort = 3310;

app.use(cors("*")); //middleware

app.get("/", (req, res) => {
    res.send("Hello Blibli");
});

app.get("/films", (req,res) => {
    res.json(filmsTab);
});

app.get("/films/:id", (req, res) => {
    const filmsId = parseInt(req.params.id)
    console.info(filmsId);
    const films = filmsTab.find((e) => e.id === filmsId);
    console.info(films);
    res.json(films);
});

app.get("/characters/:id", (req, res) => {
    const characterId = parseInt(req.params.id);
    let character;
    filmsTab.some(film => {
        character = film.characters.find((char) => char.id === characterId);
        return character;
    });
    res.json(character);
});

app.get("/films/:filmId/characters/:characterId?", (req, res) => {
    const filmId = parseInt(req.params.filmId);
    const characterId = req.params.characterId ? parseInt(req.params.characterId) : null;

    const film = filmsTab.find((e) => e.id === filmId);
    if (!film) {
        return res.status(404).json({ error: "Film not found" });
    }

    else if (characterId) {
        const character = film.characters.find((char) => char.id === characterId);
        if (!character) {
            return res.status(404).json({ error: "Character not found" });
        }
        res.json(character);
    } else {
        // Si characterId n'est pas défini, retourner le film entier
        res.json(film);
    }
});

app.listen(serverPort, () => {
    console.info(`http://localhost:${serverPort}`);
});
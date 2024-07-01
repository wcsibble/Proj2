import express from "express";
import { promises as fs } from "fs";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;

const client = await MongoClient.connect(url);
const db = client.db(dbName);

const app = express();
app.use(cors());
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/api/planets", async (req, res) => {
  const collection = db.collection("planets");
  const planets = await collection.find({}).toArray();
  res.json(planets);
});

app.get("/api/characters", async (req, res) => {
  const collection = db.collection("characters");
  const data = await collection.find({}).toArray();
  res.json(data);
});

app.get("/api/films", async (req, res) => {
  const collection = db.collection("films");
  const data = await collection.find({}).toArray();
  res.json(data);
});

app.get("/api/planets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const collection = db.collection("planets");
    const findRes = await collection.findOne({ id: Number(id) });
    res.json(findRes);
  } catch (err) {
    console.error("Error:", err);
    res
      .status(500)
      .send("Hmm, something doesn't smell right... Error deleting sock");
  }
});

app.get("/api/characters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const collection = db.collection("characters");
    const findRes = await collection.findOne({ id: Number(id) });
    res.json(findRes);
  } catch (err) {
    console.error("Error:", err);
    res
      .status(500)
      .send("Hmm, something doesn't smell right... Error deleting sock");
  }
});

app.get("/api/films/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const collection = db.collection("films");
    const findRes = await collection.findOne({ id: Number(id) });
    res.json(findRes);
  } catch (err) {
    console.error("Error:", err);
    res
      .status(500)
      .send("Hmm, something doesn't smell right... Error deleting sock");
  }
});

app.get("/api/films/:id/characters", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    let collection = db.collection("films_characters");
    const filmCharacters = await collection
      .find({ film_id: Number(id) })
      .toArray();
    const characterIds = filmCharacters.map((obj) => obj.character_id);

    collection = db.collection("characters");
    const characters = [];
    for (const cId of characterIds) {
      characters.push(await collection.findOne({ id: Number(cId) }));
    }
    res.json(characters);
  } catch (err) {
    console.error("Error:", err);
    res
      .status(500)
      .send("Hmm, something doesn't smell right... Error deleting sock");
  }
});

app.get("/api/films/:id/planets", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    let collection = db.collection("films_planets");
    const filmPlanets = await collection
      .find({ film_id: Number(id) })
      .toArray();
    const planetIds = filmPlanets.map((obj) => obj.planet_id);

    collection = db.collection("planets");
    const planets = [];
    for (const pId of planetIds) {
      planets.push(await collection.findOne({ id: Number(pId) }));
    }
    res.json(planets);
  } catch (err) {
    console.error("Error:", err);
    res
      .status(500)
      .send("Hmm, something doesn't smell right... Error deleting sock");
  }
});

app.get("/api/characters/:id/films", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    let collection = db.collection("films_characters");
    const characterFilms = await collection
      .find({ character_id: Number(id) })
      .toArray();
    const filmIds = characterFilms.map((obj) => obj.film_id);

    collection = db.collection("films");
    const films = [];
    for (const fId of filmIds) {
      films.push(await collection.findOne({ id: Number(fId) }));
    }
    res.json(films);
  } catch (err) {
    console.error("Error:", err);
    res
      .status(500)
      .send("Hmm, something doesn't smell right... Error deleting sock");
  }
});

app.get("/api/planets/:id/films", async (req, res) => {
  try {
    const { id } = req.params;

    let collection = db.collection("films_planets");
    const planetFilms = await collection
      .find({ planet_id: Number(id) })
      .toArray();
    const filmIds = planetFilms.map((obj) => obj.film_id);

    collection = db.collection("films");
    const films = [];
    for (const fId of filmIds) {
      films.push(await collection.findOne({ id: Number(fId) }));
    }
    res.json(films);
  } catch (err) {
    console.error("Error:", err);
    res
      .status(500)
      .send("Hmm, something doesn't smell right... Error deleting sock");
  }
});

app.get("/api/planets/:id/characters", async (req, res) => {
  try {
    const { id } = req.params;

    const collection = db.collection("characters");
    const findRes = await collection.find({ homeworld: Number(id) }).toArray();
    res.json(findRes);
  } catch (err) {
    console.error("Error:", err);
    res
      .status(500)
      .send("Hmm, something doesn't smell right... Error deleting sock");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

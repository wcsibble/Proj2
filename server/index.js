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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

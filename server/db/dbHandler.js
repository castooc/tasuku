/**
 * Setting up mongodb and its collections
 */
require("dotenv").config();
const { MONGO_URI } = process.env;
const { MongoClient } = require("mongodb");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);
const db = client.db("tripPlanner");
const usersCollection = db.collection("users");

module.exports = { client, db, usersCollection};
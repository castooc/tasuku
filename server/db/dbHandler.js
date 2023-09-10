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
const db = client.db("tasuku");
const usersCollection = db.collection("users");
const projectsCollection = db.collection("projects");

module.exports = { client, db, usersCollection, projectsCollection};
/**
 * Routes
 */

// setting up router
// const express = require('express');
// const router = express.Router();
const router = require("express").Router();

// importing handlers
const { 
  getUsers, 
  getUser,
  createUser,
  createProject,
  getUserProjects,
  updateProjects,
} = require('../handlers/handler');

// endpoints for getting users
router.get("/users",(getUsers))
router.get("/users/:_id", getUser);
router.post("/createuser", createUser);
router.post("/createproject", createProject);
router.get("/userprojects/:_id",getUserProjects)
router.patch("/updateprojects/:_id", updateProjects)

module.exports = router;
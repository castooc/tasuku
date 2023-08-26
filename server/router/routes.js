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
} = require('../handlers/handler');

// endpoints for getting users
router.get("/users",getUsers)


module.exports = router;
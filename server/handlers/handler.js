/**
 * Endpoint handlers
 */

// imports
const { db, usersCollection, projectsCollection} = require('../db/dbHandler');

// handlers
const getUsers = async (req, res) => {
  try {
    const totalDocuments = await usersCollection.countDocuments();
    const result = await usersCollection
      .find()
      .toArray();
    if (result.length > 0) {
      const responseData = {
        status: 200,
        total: totalDocuments,
        data: result,
      };
      res.status(200).json(responseData);
    } else {
      res.status(404).json({ status: 404, message: "No users found" });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: "Internal Server Error" });
  }
}

const getUser = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await usersCollection.findOne({ _id: _id });

    return result
      ? res.status(200).json({ status: 200, _id, data: result })
      : res.status(404).json({ status: 404, _id, data: "Not Found" });

  } catch (error) {
    return res.status(500).json({ errors: "users not find error 500" });
  }
}

const createUser = async (req, res) => {
  try {
    await usersCollection.insertOne(req.body);
    return res.status(201).json({ status: 201, data: req.body });
  } catch (error) {
    res.status(500).json({ status: 500, data: req.body, message: error.message });
  }
};

const createProject = async (req, res) => {
  console.log(req.body)
  try {
    await projectsCollection.insertOne(req.body);
    return res.status(201).json({ status: 201, data: req.body });
  } catch (error) {
    res.status(500).json({ status: 500, data: req.body, message: error.message });
  }
};

const updateProjects = async (req, res) => {
  const { _id } = req.params;
  console.log(req.body.project)
  try {
    const result = await projectsCollection.updateOne(
      { _id: _id },
      { $push: {project : { $each :[req.body.project]} } }
      );
      if (result.modifiedCount !== 0){
        return res.status(201).json({ status: 201, data: req.body });
      } else{
        res.status(404).json({ status: 404, message: "No projects found to update" });
      }
    } catch (error) {
      res.status(500).json({ status: 500, data: req.body, message: error.message });
    }
  };
  
  const getUserProjects = async (req, res) => {
    const { _id } = req.params;
    try {
      const result = await projectsCollection.findOne({ _id: _id });
  
      return result
        ? res.status(200).json({ status: 200, _id, data: result })
        : res.status(404).json({ status: 404, _id, data: "Not Found" });
  
    } catch (error) {
      return res.status(500).json({ errors: "users not find error 500" });
    }
  }
  module.exports = {
    getUsers,
    getUser,
  createUser,
  createProject,
  getUserProjects,
  updateProjects,
}
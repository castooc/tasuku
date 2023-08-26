/**
 * Endpoint handlers
 */

// imports
const { db, usersCollection} = require('../db/dbHandler');

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

// const updateCartQuantityItem = async (req, res) => {
//   const { _id, qty } = req.params;
//   let _idint = parseInt(_id);
//   let _qtyint = parseInt(qty);

//   try {
//     const query = { _id: _idint };
//     const newValues = { $set: { quantity: _qtyint } };

//     const result = await cartCollection.updateOne(query, newValues);

//     if (result.matchedCount && result.modifiedCount) {
//       return res
//         .status(200)
//         .json({ status: 200, _id, message: "Product updated successfully" });
//     } else {
//       res
//         .status(404).json({ status: 404, _id, message: "Product not found" });
//     }

//   } catch (error) {
//     return result
//       .status(500).json({ status: 500, message: "Internal Server Error" });
//   }
// }

// const updateQuantityItem = async (req, res) => {
//   const { _id, qty } = req.params;
//   let _idint = parseInt(_id);
//   let _qtyint = -1 * parseInt(qty);

//   try {
//     const query = { _id: _idint };
//     const increment = { $inc: { numInStock: _qtyint} };
//     const result = await productsCollection.updateOne(query, increment);

//     if (result.matchedCount && result.modifiedCount) {
//       return res
//         .status(200)
//         .json({ status: 200, _id, message: "Product updated successfully" });
//     } else {
//       res
//         .status(404).json({ status: 404, _id, message: "Product not found" });
//     }

//   } catch (error) {
//     return result
//       .status(500).json({ status: 500, message: "Internal Server Error" });
//   }
// }

// const deleteItemCart = async (req, res) => {
//   const { _id } = req.params;
//   let _idint = parseInt(_id);

//   try {
//     const query = { _id: _idint };
//     const result = await cartCollection.deleteOne(query);

//     if (result.deletedCount) {
//       res.status(200).json({ status: 200, message: "Item in cart succefully removed" });
//     } else {
//       res.status(404).json({ status: 404, _id, message: "Item not found" });
//     }

//   } catch (error) {
//     res.status(500).json({ status: 500, message: "Internal Server Error" });
//   }
// };

// const deleteItemsCart = async (req, res) => {
//   try {
//     const result = await cartCollection.deleteMany({});
//     if (result.deletedCount) {
//       res.status(200).json({ status: 200, message: "Items in cart succefully removed" });
//     } else {
//       res.status(404).json({ status: 404, message: "No items to delete" });
//     }

//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ status: 500, message: "Internal Server Error" });
//   }
// };

// const getAllItemsCarts = async (req, res) => {
//   try {
//     const result = await cartCollection.find({}).toArray();

//     if (result.length > 0) {
//       const responseData = {
//         status: 200,
//         data: result,
//       };
//       res.status(200).json(responseData);
//     } else {
//       res.status(200).json({ status: 200, message: "No products found in cart" });
//     }

//   } catch (error) {
//     res.status(500).json({ status: 500, message: "Internal Server Error" });
//   }
// }

// const getcategorie = async (req, res) => {
//   try {

//     const collection = db.collection("categorie");
//     const result = await collection.find({}).toArray();

//     if (result.length > 0) {
//       const responseData = {
//         status: 200,
//         data: result,
//       };
//       res.status(200).json(responseData);
//     } else {
//       res.status(404).json({ status: 404, message: "No products found" });
//     }

//   } catch (error) {
//     res.status(500).json({ status: 500, message: "Internal Server Error" });
//   }
// }

// const getbodylocation = async (req, res) => {
//   try {

//     const collection = db.collection("bodylocation");
//     const result = await collection.find({}).toArray();

//     if (result.length > 0) {
//       const responseData = {
//         status: 200,
//         data: result,
//       };
//       res.status(200).json(responseData);
//     } else {
//       res.status(404).json({ status: 404, message: "No products found" });
//     }

//   } catch (error) {
//     res.status(500).json({ status: 500, message: "Internal Server Error" });
//   }
// }

module.exports = {
  getUsers,
  getUser,
  createUser,
}
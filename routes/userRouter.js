const route = require("express").Router();

// const userController = require("../controllers/userController");
const { 
    createUser,
    updateUser,
    deleteUser,
  } = require("../controllers/userController");


route.get("/createUser", createUser);
route.get("/updateUser", updateUser);
route.get("/deleteUser", deleteUser);


module.exports = route;
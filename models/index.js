const sequelize = require("../bin/dbConnection");

const users = require("./definations/users");
const tasks = require("./definations/tasks");
const products = require("./definations/products");



const models = { users, tasks, products }


// Relations

const db = {}

db.sequelize = sequelize;
sequelize.models = models;


module.exports = { db, models }
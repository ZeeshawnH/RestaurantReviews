const { Sequelize, DataTypes } = require("sequelize");

// Database connection
const sequelize = new Sequelize('postgres://postgres:Lettuceeat1apple!@localhost:5432/RestaurantReviews');

// Check for connection
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(error => {
    console.error('Unable to connect to the database:', error);
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Connect to model
db.users = require("./userModel") (sequelize, DataTypes);

// Export module
module.exports = db;
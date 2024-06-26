const express = require("express");
const sequelize = require("sequelize");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const db = require("./models");
const userRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT || 8080;
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

db.sequelize.sync({ force: true }).then(() => {
    console.log("Database resynced");
});

app.use("/api/users", userRoutes);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
const express = require('express');
const db = require("../models");

const User = db.users;

const saveUser = async (req, res, next) => {
    try {
        const username = await User.findOne({
            where: {
                userName: req.body.userName,
            }
        });

        if (username) {
            return res.status(400).send({ message: "Username already in use" });
        }

        const emailcheck = await User.findOne({
            where: {
                email: req.body.email,
            }
        });

        if (emailcheck) {
            console.log(emailcheck);
            return res.status(400).send({ message: "Email already in use" });
        }

        next();
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: err });
    }
}

module.exports = {
    saveUser
}
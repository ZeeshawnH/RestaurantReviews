const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");

const User = db.users;

const signup = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const data = {
            userName,
            email,
            password: await bcrypt.hashSync(password, 10),
        };

        const user = User.create(data);

        if (user) {
            let token = jwt.sign({ id: user.id }, process.env.SECRET, {
                expiresIn: 24 * 60 * 60 * 1000,
            });

            res.cookie("jwt", token, { maxAge: 24 * 60 * 60, httpOnly: true });
            console.log("user", JSON.stringify(user, null, 2));
            console.log(token);

            return res.status(200).send({ message: "User created successfully" });
        } else {
            return res.status(409).send("Details are not correct");
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: err });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email: email
            }
        });

        console.log(user);

        if (user) {
            const isSame = await bcrypt.compare(password, user.password);

            if (isSame) {
                let token = jwt.sign({ id: user.id }, process.env.SECRET, {
                    expiresIn: 24 * 60 * 60 * 1000
                });

                res.cookie("jwt", token, { maxAge: 24 * 60 * 60, httpOnly: true });
                console.log("user", JSON.stringify(user, null, 2));
                console.log(token);

                return res.status(201).send(user);
            } else {
                console.log("Password is incorrect");
                return res.status(401).send("Authentication failed");
            }

        } else {
            console.log("User not found");
            console.log(req.body.email);
            return res.status(401).send("Authentication failed");
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: err });
    }
};

module.exports = {
    signup,
    login
};
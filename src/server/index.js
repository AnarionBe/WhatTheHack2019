const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const {APP_PORT} = process.env || 5000;

import bcrypt from "bcryptjs";
import User from "./UserModel";
import mongoose from "mongoose";

const app = express();

mongoose
    .connect("mongodb://dev:dev@mongo:27017/connect?authSource=admin")
    .then(() =>
        console.log("Connection to MongoDB has been successfully established."),
    )
    .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.post("/api/register", (req, res) => {
    const email = req.body.email;

    User.findOne({email}).then(user => {
        if (user) {
            return res.status(400).json({error: "Email already used"});
        }

        const newUser = new User({
            email: req.body.email,
            age: req.body.age,
            city: req.body.locality,
            username: req.body.username,
            languages: req.body.languages,
            password: req.body.password,
        });

        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                return res.status(500).send(err);
            }
            bcrypt.hash(newUser.password, salt, (error, hash) => {
                if (error) {
                    return res.status(500).send(error);
                }
                newUser.password = hash;
                newUser
                    .save()
                    // eslint-disable-next-line no-shadow
                    .then(user => res.status(200).json(user))
                    // eslint-disable-next-line no-shadow
                    .catch(err => res.status(500).send(err));
            });
        });
    });
});

app.all("*", (req, res) => {
    res.sendFile(`${__dirname}../../client/index.html`);
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const {APP_PORT} = process.env || 5000;

import bcrypt from "bcryptjs";
import User from "./UserModel";
import Activity from "./ActivityModel";
import Search from "./SearchModel";
import mongoose from "mongoose";
// import cors from "cors";

const app = express();

// const rng = (min, max) => {
//     const mini = Math.ceil(min);
//     const maxi = Math.floor(max);

//     return Math.floor(Math.random() * (maxi - mini + 1)) + mini;
// };

mongoose
    .connect("mongodb://dev:dev@mongo:27017/connect?authSource=admin")
    .then(() =>
        console.log("Connection to MongoDB has been successfully established."),
    )
    .catch(err => console.log(err));

app.use(bodyParser.json());
// app.use(cors);
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

app.post("/api/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email}).then(user => {
        if (!user) {
            return res
                .status(400)
                .json({email: "The user has not been found!"});
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                return res.status(201).json(user);
            }

            return res
                .status(400)
                .json({password: "The password is incorrect!"});
        });
    });
});

app.get("/api/logout", (req, res) => {
    res.status(200).json({message: "logged out"});
});

app.post("/api/activities", (req, res) => {
    const newActivity = new Activity({
        title: req.body.title,
        description: req.body.description,
        locality: req.body.locality,
        validity: req.body.validity,
    });

    newActivity.save();
    res.status(200).json(newActivity);
});

app.post("/api/matches", (req, res) => {
    Search.find({city: req.body.location}, (err, matches) => {
        if (err) {
            res.status(400).json({Error: err});
        }

        if (matches.length === 0) {
            User.findOne({email: req.body.email}).then(data => {
                if (!data) {
                    return res.status(400).json({Error: "User not found"});
                }
                const newSearch = new Search({
                    email: data.email,
                    age: data.age,
                    city: req.body.location,
                    languages: data.languages,
                    typeActivities: req.body.criterias,
                    date: req.body.date,
                });

                newSearch.save();
                return res.status(200).json(newSearch);
            });

            return res.status(400).json({Error: "No matches found"});
        }

        const list = [];

        req.body.languages.forEach(elem => {
            const index = matches.indexOf(elem);

            if (index >= 0) {
                list.push(matches[index]);
            }
        });
        if (list.length === 0) {
            User.findOne({email: req.body.email}).then(data => {
                if (!data) {
                    return res.status(400).json({Error: "User not found"});
                }
                const newSearch = new Search({
                    email: data.email,
                    age: data.age,
                    city: req.body.locality,
                    languages: data.languages,
                    typeActivities: req.body.criterias,
                    date: req.body.date,
                });

                newSearch.save();
                return res.status(200).json(newSearch);
            });

            return res.status(400).json({Error: "No matches found"});
        }
        return res.status(200).json(list);
    });
});

// app.post("/api/rooms", (req, res) => {
//     const newRoom = new Room({
//         users: req.body.users,
//         city: req.body.locality,
//         // languages: req.body,
//     });

//     console.log(req);
// });

app.all("*", (req, res) => {
    res.sendFile(`${__dirname}../../client/index.html`);
});

app.listen(APP_PORT, () => {
    console.log(`🚀 Server is listening on port ${APP_PORT}.`);
});

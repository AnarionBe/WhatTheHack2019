const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const {APP_PORT} = process.env || 5000;

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.all("*", (req, res) => {
    res.sendFile(__dirname + "../../client/index.html");
});

http.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

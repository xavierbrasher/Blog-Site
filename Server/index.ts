// Get dot env file ready
import dotenv from "dotenv";
dotenv.config();

// Get express, db and connects db to postgres
import express from "express";
import db from "./lib/useDB";
db.connect().then((value) => {
    console.log("Connected to Database: ", value.client.database);
});

// Get const's set up
const port = 8080;
const app = express();

app.use(express.static(__dirname + "/public/"));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get("/api/blogs", (req, res) => {
    let result: any[];
    db.manyOrNone("SELECT * FROM BLOGS")
        .then((value) => {
            result = value;
        })
        .catch((err) => {
            result = err;
        })
        .finally(() => {
            res.send(result);
        });
});

app.get("/api/blog/:id", (req, res) => {
    const { id } = req.params;
    db.oneOrNone(`SELECT * FROM BLOGS WHERE id = ${id}`)
        .then((value) => {
            res.send(value);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

// Send all links except for others indicated to index.html
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/" + "index.html");
});

// Starts server
app.listen(port, () => {
    console.log("Blog-Site Backend Listening on Port: " + port);
});

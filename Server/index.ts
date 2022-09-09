// Get dot env file ready
import dotenv from "dotenv";
dotenv.config();

// Get express and db
import express from "express";
import db from "./lib/useDB";

// Get const's set up
const port = 8080;
const app = express();

app.use(express.static(__dirname + "/public/"));

app.get("/api", (req, res) => {
    res.send("Hello");
    // console.log(db);
});

// Send all links except for others indicated to index.html
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/" + "index.html");
});

// Starts server
app.listen(port, () => {
    console.log("Blog-Site Backend Listening on Port: " + port);
});

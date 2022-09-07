import * as path from "path";
import express = require("express");

const app = express();
const port = 8080;

// serve static assets normally
app.use(express.static(__dirname + "/public"));

app.get("/api", function (request: any, response: any) {
    response.send("WOW");
});
// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get("*", function (request: any, response: any) {
    response.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(port);
console.log("server started on port " + port);

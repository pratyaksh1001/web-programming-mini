const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.sendFile("home.html");
});

app.listen(3000);

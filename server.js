const express = require("express");
const app = express();

// ===== SERVER MODULES ===== //
const { getStarter } = require("./server/starter-module");

// ===== MIDDLEWARE ===== //
app.use(express.static("public"));
app.use(express.json());

// ===== ROUTES ===== //
app.get("/api/starter", getStarter);

// ===== START SERVER ===== //
app.listen(8080, function () {
    console.log("server is listening");
});

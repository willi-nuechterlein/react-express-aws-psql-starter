const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

// ===== START SERVER ===== //
app.listen(8080, function () {
    console.log("server is listening");
});

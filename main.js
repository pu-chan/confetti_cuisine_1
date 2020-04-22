"use strict";

// expressをロードして、expressアプリケーションを実体化する
const express = require("express"),
    app = express();
app.set("port", process.env.PORT || 3000);
app.use(
    express.urlencoded({extended: false})
);
app.use(express.json());

// 経路
app.get("/", (req, res) => {
    res.send("Welcome to Confetti Cuisine!");
});

// アプリケーションがポート3000を監視
app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});
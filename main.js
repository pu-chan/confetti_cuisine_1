"use strict";

// expressをロードして、expressアプリケーションを実体化する
const express = require("express"),
    app = express();
app.set("port", process.env.PORT || 3000);
const homeController = require("./controllers/homeController");
const layouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.use(layouts);
app.use(
    express.urlencoded({extended: false})
);
app.use(express.json());

// 経路
app.get("/", (req, res) => {
    res.send("Welcome to Confetti Cuisine!");
});
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

// アプリケーションがポート3000を監視
app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});
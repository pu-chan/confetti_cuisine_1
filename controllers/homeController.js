"use strict";

// コース内容を変数に代入してビューにわたす
const courses = [
    {
        title: "Event Driven Cakes",
        cost: 50
    },
    {
        title: "Asynchronous Artichoke",
        cost: 25
    },
    {
        title: "Object Oriented Orange Juice",
        cost: 10
    }
];

// 経路ごとのコールバック関数
exports.showCourses = (req, res) => {
    res.render("courses", {offeredCourses: courses});
};
exports.showSignUp = (req, res) => {
    res.render("contact");
};
exports.postedSignUpForm = (req, res)=> {
    res.render("thanks");
};
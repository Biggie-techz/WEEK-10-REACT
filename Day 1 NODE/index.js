// import express from "express";
const express = require("express");
const app = express();

// import ejs
const ejs = require("ejs");

let userArray = [];
// TO RENDER EJS FILES
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (request, response) => {
  response.render("signup");
});

app.get("/signup", (request, response) => {
  response.render("signup");
});

app.post("/register", (request, response) => {
  userArray.push(request.body);
  console.log(userArray);
  response.redirect("/login");
});

app.get("/login", (request, response) => {
  response.render("login");
});

// TO RENDER HTML FILES
// app.get("/", (request, response) => {
// response.send([
//   { name: "Hero", food: "yam" },
//   { name: "Ayo", food: "rice" },
//   { name: "Demi", food: "beans" },
//   { name: "Dami", food: "rice" },
//   { name: "Sola", food: "beans" },
//   { name: "Bami", food: "yam" }
// ]);
// response.sendFile(__dirname + "/index.html");
// });

const port = 5000;
app.listen(port, () => {
  console.log("listening on port " + port);
});

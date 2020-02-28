/**
 * 
 * ========THIS IS TO EXPLAIN HOW ROUTES IN DIFFERENT FILES WORK====================
 * users.get("/login", function(req, res) {
  res.send("login page");
});
const user = require("./user");
users.get("/", require("./all-users"));
users.get("/:userId", user);


//http://localhost:3001/users==>  - Displays "Users Index Page"
users.get("/", function(req, res) {
  res.send("Users Index Page");
});
//http://localhost:3001/users/list ==>Displays "Users List Page"
users.get("/list", function(req, res) {
  res.send("Users List Page");
});
 */
const users = require("express").Router();
const { signUp, LogIn, welcome, refresh, test } = require("./user-handlers");

users.post("/signup", signUp);
users.post("/log-in", LogIn);
users.get("/welcome", welcome);
users.post("/refresh", refresh);

users.get("/", require("./all-users"));
users.get("/test", test);
users.get("/list", function(req, res) {
  res.send("Users List Page");
});

module.exports = users;

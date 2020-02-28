/**
 * ========> routes/index.js
 */
const routes = require("express").Router();

//const users = require("./users");

routes.use("/users", require("./users"));

//localhost:3001/about - Displays "About Page"
routes.get("/about", (req, res) => {
  res.status(200).json({ message: "about Page" });
});

//localhost:3001/ - Displays "Index Page"
routes.get("/", (req, res) => {
  res.status(200).json({ message: "Connected!!!!" });
});

module.exports = routes;

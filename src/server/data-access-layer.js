const { DataStore } = require("notarealdb");
const store = new DataStore("./src/server/data-base");

module.exports = {
  users: store.collection("users"),
  comments: store.collection("comments"),
  photos: store.collection("photos"),
  posts: store.collection("posts"),
  todos: store.collection("todos")
};

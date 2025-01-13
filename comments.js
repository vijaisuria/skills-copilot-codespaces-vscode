// Create web server
// Create comments route
// Get all comments from database
// Return comments as JSON
// Listen on port 3000

const express = require("express");
const app = express();
const comments = require("./comments");

app.get("/comments", (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// Run the server with node comments.js
// Visit http://localhost:3000/comments in your browser
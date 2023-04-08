const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-headers",
    "Origin, X-Requsted-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const posts = req.body;
  console.log(posts);
  res.status(201).json({
    message: "Post added successfully",
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "3123kmk32",
      title: "1st ever post on postbox",
      content: "this is coming from the server",
    },
    {
      id: "5433kmkfds32",
      title: "2nd ever post on postbox",
      content: "this is coming from the server",
    },
  ];
  res
    .status(200)
    .json({ message: "posted fetched successfully", posts: posts });
});

module.exports = app;

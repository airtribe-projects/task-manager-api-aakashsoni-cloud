const express = require('express');
require("dotenv").config();
const taskRoutes = require("./src/routers/taskRoutes");
const app = express();
const port = process.env.PORT || 3000;
const endpoint = process.env.ENDPOINT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`${endpoint}/tasks`, taskRoutes);

app.listen(port, (err) => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server is listening on ${port}`);
});

module.exports = app;
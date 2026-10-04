const express = require("express");

const app = express();

const moviesRouter = require("./routes/movies");

app.use(express.json());

app.use("/movies", moviesRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
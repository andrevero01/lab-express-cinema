const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Movie = mongoose.model("Movie", {
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

// GET home page
router.get("/", async (req, res, next) =>
  res.render("index", { showNavbar: false })
);

// GET Movies
router.get("/movies", async (req, res) => {
  const movies = await Movie.find();
  res.render("movies", { movies, showNavbar: true });
});

// GET Movie info
router.get("/movie/:id", async (req, res) => {
  const movie = await Movie.findOne({ _id: req.params.id });
  res.render("movie-details", { movie, showNavbar: true });
});

module.exports = router;

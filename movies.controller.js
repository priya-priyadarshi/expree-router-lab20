const getAllMovies = (req, res) => {
  res.json({
    message: "Movies fetched successfully"
  });
};

const addMovie = (req, res) => {
  const { title, year, genre } = req.body;

  res.json({
    message: "Movie added successfully",
    movie: {
      title,
      year,
      genre
    }
  });
};

module.exports = {
  getAllMovies,
  addMovie
};
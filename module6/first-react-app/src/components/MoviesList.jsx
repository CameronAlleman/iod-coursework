const movies = [
  {
    id: 1, // items in data collections need unique IDs
    title: "The Shawshank Redemption",
    year: 1994,
    synopsis: "Two imprisoned men find redemption.",
  },
  {
    id: 2, // unique ID
    title: "The Dark Knight",
    year: 2008,
    synopsis: "Batman fights the menace known as the Joker.",
  },
  {
    id: 3, // unique ID
    title: "Interstellar",
    year: 2014,
    synopsis: "Explorers travel through a wormhole in space.",
  },
];

function MoviesList() {
  console.log({ movies });

  return (
    <div className="MoviesList componentBox">
      <ul>
        {" "}
        {/* anytime you make a list you need to provide a key */}{" "}
        {/* iterate over each movie, print the title in a list */}
        {movies.map((movie) => (
          <li key={movie.title}>
            <h4>{movie.title}</h4>
            <p>{movie.year}</p>
            <p>{movie.synopsis}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;

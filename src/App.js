import React, { useEffect, useState } from 'react';
import Movie from './Components/Movie';
import { FEATURED_API } from "./variables";
import { SEARCH_API } from "./variables";


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="movie-container">
      {movies && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
  );
}

export default App;

import React, { useEffect } from "react";

import "./App.css";
import axios from "./axios";

export default function Rows({ title, fetchurl, isLargeRow }) {
  const imgBaseUrl = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = React.useState([]);

  useEffect(() => {
    async function fetchdata() {
      const res = await axios.get(fetchurl);
      //console.log(res.data.results)
      setMovies(res.data.results);
    }
    fetchdata();
  }, [fetchurl]);

  //poster_path
  //console.table(movies);
  return (
    <div>
      <div className="row_header">{title}</div>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row_poster"
            src={
              imgBaseUrl +
              (isLargeRow ? movie.poster_path : movie.backdrop_path)
            }
            alt={movie?.title}
          />
        ))}
      </div>
    </div>
  );
}

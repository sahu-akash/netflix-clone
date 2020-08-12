import React, { useEffect } from "react";
import requests from "./requests";
import "./App.css";
import axios from "./axios";
export default function Banner() {
  const [billBoardMovie, setMovies] = React.useState([]);
  //const baseURL = "https://api.themoviedb.org/3";
  // async function fetchdata() {
  //   const res = await fetch(baseURL + fetchurl.fetchurl)
  //     .then((response) => response.json())
  //     .then((data) => setMovies(data.results));
  // }
  // fetchdata();
  // //console.log(billBoardMovie.length);
  //const imgBaseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchdata() {
      const res = await axios.get(requests.fetchTrending);

      setMovies(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
    }
    fetchdata();
  }, []);

  console.table(billBoardMovie);

  return (
    <header
      className="billboard"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${billBoardMovie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="billboard-content">
        <h1>
          {billBoardMovie?.title ||
            billBoardMovie?.name ||
            billBoardMovie?.original_title}
        </h1>

        <h1 className="billboard-overview">{billBoardMovie?.overview}</h1>

        <div className="billboard-buttons">
          <button className="billboard-button">Play</button>
          <button className="billboard-button">More info</button>
        </div>
      </div>
    </header>
  );
}

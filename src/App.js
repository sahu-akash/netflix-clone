import React from "react";
import Rows from "./Rows";
import requests from "./requests";
import "./App.css";
import axios from "./axios";
import Banner from "./Banner";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner fetchurl={requests.fetchTrending} />
      <Rows
        title={"Netflix Originals"}
        isLargeRow
        fetchurl={requests.fetchNetflixOriginals}
      />
      <Rows title={"Trending Now"} fetchurl={requests.fetchTrending} />
      <Rows title={"Action Movies"} fetchurl={requests.fetchActionMovies} />

      <Rows title={"Top Rated"} fetchurl={requests.fetchTopRated} />
      <Rows title={"Comedy Movies"} fetchurl={requests.fetchComedyMovies} />
      <Rows title={"Horror Movies"} fetchurl={requests.fetchHorrorMovies} />
      <Rows title={"Romanctic Movies"} fetchurl={requests.fetchComedyMovies} />
      <Rows title={"Documentaries"} fetchurl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default App;

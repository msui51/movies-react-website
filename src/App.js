import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieInfo from './pages/MovieInfo';

import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);

  async function fetchMovieData(str) {
    const res = await axios.get (`https://www.omdbapi.com/?i=tt3896198&apikey=b11a6a7d&s=${str}`);
    let movieData = res.data.Search;
    movieData  = movieData.slice(0, Math.min(movieData.length, 6));
    setMovies(movieData);
  }

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home fetchMovieData={fetchMovieData}/>} />
        <Route path="/movies" element={<Movies movies={movies} fetchMovieData={fetchMovieData} setMovies={setMovies} />} />
        <Route path="/movies/:id" element={<MovieInfo />} movies={movies} />
      </Routes>
    </Router>
  );
}

export default App;

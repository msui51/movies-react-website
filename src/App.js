import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieInfo from './pages/MovieInfo';
import { useParams } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":movies" element={<Movies />} />
        {/* <Route path=":id" element={<MovieInfo />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

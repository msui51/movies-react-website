import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav';
import axios from 'axios';
import MovieData from '../components/MovieData';

function MovieInfo({movies}) {
  const {id} = useParams();
  const [movie, setMovie] = useState({});

  async function fetchMovieDetails(id){
    const {data} = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=b11a6a7d`);
    setMovie(data);
    console.log(data)
  }

  useEffect(()=>{
    fetchMovieDetails(id);
  },[])

  return (
    <div className='column'>
      <div className="row">
        <Nav/>
        <MovieData movie={movie}/>
      </div>
    </div>
  )
}

export default MovieInfo
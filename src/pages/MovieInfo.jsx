import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav';
import axios from 'axios';
import MovieData from '../components/MovieData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function MovieInfo({movies}) {
  const {id} = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  async function fetchMovieDetails(id){
    const {data} = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=b11a6a7d`);
    setMovie(data);
    console.log(data)
  }

  useEffect(()=>{
    fetchMovieDetails(id);
  },[id])

  return (
    <div className='column movieInfo__column'>
      <div className="row">
        <Nav/>
        <button className='button movieInfo__button' onClick={()=>navigate(-1)}>
            <FontAwesomeIcon className='movieInfo__back--icon' icon="fa-solid fa-arrow-left" />
            Back
        </button>
        <MovieData movie={movie}/>
      </div>
    </div>
  )
}

export default MovieInfo
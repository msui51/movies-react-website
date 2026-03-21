import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


function Movie({movies}) {

  return (
    <>
    {movies.map((movie)=>(     
                    <div class="movie" key={movie.imdbID}>
                        <div class="movie__top">
                                <img src={movie.Poster} alt="" class="movie__img"/>
                                <Link to={`/movies/${movie.imdbID}`} class="movie__link">
                                <div class="movie__slide--wrapper"></div>
                                <div class="movie__slide">More Info
                                    <FontAwesomeIcon className='arrow__right' icon="fa-solid fa-arrow-right" />
                                </div>
                                </Link>
                        </div>
                        <div class="movie__bottom">
                            <p class="movie__title">{movie.Title}</p>
                            <p class="movie__type">{movie.Type}</p>
                            <p class="movie__year">{movie.Year}</p>
                        </div>
                    </div>
              )
    )}
    </>
  )
}

export default Movie
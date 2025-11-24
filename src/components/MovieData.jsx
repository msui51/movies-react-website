import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MovieData({movie}) {
  return (
    <div className='movieData'>
        <div className="movieData__img--wrapper">
            <img src={movie.Poster} alt="" className="movieData__img" />
        </div>
        <div className="movieData__description">
            <div className="movieData__wrapper--top">
                <div className="movieData__wrapper--top-left">
                    <h2 className='movieData__title'>{movie.Title}</h2>
                    <div className="movieData__subtitle--wrapper">
                        <p className="movieData__subtitle">{movie.Year}</p>
                        <p className="movieData__subtitle">{movie.Rated}</p>
                        <p className="movieData__subtitle">{movie.Runtime}</p>
                    </div>
                </div>
                <div className="movieData__wrapper--top-right">
                    <div className="movieData__rating--wrapper">
                        <h3 className="movieData__rating--title">IMDB Rating</h3>
                        <button className="movieData__rating--wrapper-btn">
                            <FontAwesomeIcon className='movieData__rating--icon' icon="fa-solid fa-star" />
                            <div className="movieData__rating--num">
                                <p className="movieData__rating"><span className='emphasis'>{movie.imdbRating}</span>/10</p>
                                <p className="movieData__votes">{movie.imdbVotes}</p>
                            </div>
                        </button>   
                    </div>
                    <div className="movieData__personal-rating">
                        <h3 className="movieData__rating--title">Your Rating</h3>
                        <button className="movieData__rating--wrapper-btn movieData__rating--wrapper-btn-personal">
                            <FontAwesomeIcon className="movieData__personal-rating--icon" icon="fa-regular fa-star" />
                            <p className="movieData__personal-rating--text">Rate</p>
                        </button>
                    </div>
                </div>
            </div>
            <p className="movieData__plot">{movie.Plot}</p>
            <p className="movieData__director"><strong>Director:</strong> {movie.Director}</p>
            <p className="movieData__actors"><strong>Actors:</strong> {movie.Actors}</p>
                <div className="movieData__wrapper--bottom">
                <button className='button movieData__button movieData__button--watchlist'>
                    <FontAwesomeIcon className='movieData__button--icon' icon="fa-solid fa-plus" />
                    Add to Watchlist
                </button>
                <button className='button movieData__button'>
                    <FontAwesomeIcon className='movieData__button--icon' icon="fa-regular fa-eye" />
                    Mark as Watched
                </button>
            </div>
        </div>
    </div>
  )
}

export default MovieData
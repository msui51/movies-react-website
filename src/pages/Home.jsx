import React, { useState } from 'react'
import Nav from '../components/Nav'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function Home({fetchMovieData}) {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    async function searchMovie(event){
        event.preventDefault();
        const q = query.trim();
        await fetchMovieData(q);
        navigate(`/movies?query=${encodeURIComponent(q)}`);
    }
    

   
  return (
    <div className="column">
        <div className='row'>
            <Nav/>
            <div className="home__title--wrapper">
                <h2 className='home__title'>The Place to Discover Movies</h2>
                <form className="search__wrapper" onSubmit={searchMovie} >
                    <input 
                        value={query}
                        type="text" 
                        onChange={(event)=>setQuery(event.target.value)} 
                        className="input" 
                        placeholder="Search by Title, Year or Keyword" />
                    <button type='submit' className="button nav__button--light">
                        <FontAwesomeIcon className='search__logo' icon="fa-solid fa-magnifying-glass" />
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Home
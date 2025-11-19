import React from 'react'
import Nav from '../components/Nav'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Home() {
  return (
    <div className="column">
        <div className='row'>
            <Nav/>
            <div className="home__title--wrapper">
                <h2 className='home__title'>The Place to Discover Movies</h2>
                <div className="search__wrapper">
                    <input type="text" onChange={(event)=>console.log(event.target.value)} className="input" placeholder="Search by Title, Year or Keyword" />
                    <button className="button nav__button--light">
                        <FontAwesomeIcon className='search__logo' icon="fa-solid fa-magnifying-glass" />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
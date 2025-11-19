import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Nav from './Nav';

function Banner() {
  return (
    <nav id="nav">
        <div className="column">
            <div className="row nav__row">
                <Nav/>
                <div className="nav__bottom">
                    <h2 className="nav__title">Browse Our Movies</h2>
                    <div className="nav__input--wrapper">
                        <input className="nav__input" onchange="onSearch(event)" type="text" placeholder="Search by Title, Year or Keyword"/>
                        <div className="nav__search--wrapper">
                            <FontAwesomeIcon className='nav__search--logo' icon="fa-solid fa-magnifying-glass" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Banner
import React, { useEffect, useState } from 'react'
import movie_icon from '../assets/icons8-logo-50.png';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Nav() {
    const location = useLocation()
    const [light, setLight] = useState(true);

    useEffect(()=>{
        if(location.pathname !== '/movies'){
            setLight(true);
        }else{
            setLight(false);
        }
        console.log(location.pathname)
    }, [location.pathname])

  return (
                <div className={`nav__top ${light ? 'nav__light' : ''}`}>
                    <div className="nav__logo">
                        <div className="nav__logo--image-wrapper">
                            <img className="nav__img" src={movie_icon} alt=""/>
                        </div>
                         <p className="nav__logo--title" >
                                Movies
                        </p>                   
                    </div>
                    <ul className="nav__links">
                        <li className="nav__list">
                            <Link to='/' className="nav__list--link nav__list--link-underline" >
                                    Home                            
                            </Link>
                        </li>
                        <li className="nav__list">
                            <a  className="nav__list--link" href="">
                                <button id="is__disabled" className="button nav__button">
                                    CONTACT
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
  )
}

export default Nav
import React, { useEffect, useState } from 'react'
import movie_icon from '../assets/icons8-logo-50.png';
import { useLocation } from 'react-router-dom';

function Nav() {
    const location = useLocation()
    const [home, setHome] = useState(false);
    console.log(location.pathname);

    useEffect(()=>{
        if(location.pathname === '/'){
            setHome(true);
        }else{
            setHome(false);
        }
    }, [location.pathname])

  return (
                <div className="nav__top">
                    <div className="nav__logo">
                        <div className="nav__logo--image-wrapper">
                            <img className="nav__img" src={movie_icon} alt=""/>
                        </div>
                         <p className={home ? 
                                "nav__light"
                                : "nav__logo--title"} >
                                Movies
                        </p>                   
                    </div>
                    <ul className="nav__links">
                        <li className="nav__list">
                            <a  className={home ? 
                                "nav__light" 
                                : "nav__list--link nav__list--link-underline nav__light"}  
                                href="">
                                Home
                            </a>
                        </li>
                        <li className="nav__list">
                            <a  className="nav__list--link" href="">
                                <button className={home ? 
                                    "button nav__button--light"
                                    : "button nav__button"}
                                    onclick="onAlert()">
                                    CONTACT
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
  )
}

export default Nav
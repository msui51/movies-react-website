import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import Movie from '../components/Movie';
import Nav from '../components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';


function Movies({movies, fetchMovieData, setMovies}) {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [newMovieResults, setNewMovieResults] = useState([]);
  const [sortValue, setSortValue] = useState('SORT');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');


  async function onSubmitSearch(e) {
    e.preventDefault();
    const q = searchText.trim();
    if (!q) return;
    setLoading(true);
    const newMovieData = await fetchMovieData(q);
    setNewMovieResults(newMovieData);
    navigate(`/movies?query=${encodeURIComponent(q)}`)
    setLoading(false);
  }

  function onSort(value){
    const hasLocal = newMovieResults && newMovieResults.length > 0;
    if(value === "FROM_A_TO_Z"){
      if(hasLocal){
        setNewMovieResults([...newMovieResults].sort((a, b) => a.Title.localeCompare(b.Title)));
      }else {
        setMovies([...movies].sort((a, b) => a.Title.localeCompare(b.Title)));
      }
    }else if(value === "RECENT_TO_OLDER"){
      if(hasLocal){
        setNewMovieResults([...newMovieResults].sort((a, b) => (parseInt(b.Year)) - (parseInt(a.Year))));
      }else {
        setMovies([...movies].sort((a, b) => (parseInt(b.Year)) - (parseInt(a.Year))));
      }
    }
  }
  
  useEffect(()=>{
    setSortValue('SORT');
  },[newMovieResults]);

  useEffect(() => {
    fetchMovieData(query);
  }, []);

  return (
    <>
      <div id="nav">
        <div className="column">
          <div className="row">
            <Nav/>
            <div className="nav__bottom">
              <h1 className="nav__title">Browse Our Movies</h1>
              <form className="nav__input--wrapper" 
                onSubmit={onSubmitSearch}>
                <input 
                  className="nav__input" 
                  onChange={(e)=> setSearchText(e.target.value)}
                  type="text" 
                  placeholder="Search by Title, Year or Keyword"/>
                <div className="nav__search--wrapper">
                  <FontAwesomeIcon className='nav__search--logo' icon="fa-solid fa-magnifying-glass" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="column">
            <div className="row">
                <div className="movies__top--wrapper">
                    <h2 className="search__title">Search results: 
                      <span className="search__specific">
                        { searchText ?  searchText 
                        : ''}
                      </span>
                    </h2>
                    <select id="filter" value={sortValue} onChange={(e)=>{setSortValue(e.target.value); onSort(e.target.value);}}>
                        <option value="SORT">Sort</option>
                        <option value="RECENT_TO_OLDER">Year, Recent to Older</option>
                        <option value="FROM_A_TO_Z">Name, From A to Z</option>
                    </select>
                </div>
                <div className="movies">
                  { loading ? 
                  <div className='loading__wrapper'>
                    <FontAwesomeIcon className='movies__loading--spinner' icon="fa-solid fa-spinner" />
                  </div>
                  :
                  <Movie movies={(newMovieResults && newMovieResults.length > 0) 
                          ? newMovieResults 
                          : movies}/>
                  }
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Movies
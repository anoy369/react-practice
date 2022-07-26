import './App.css';
import { useEffect, useState } from 'react';
import searchIcon from './searchIcon.svg';
import MovieCard from './movieCard';

const API_URL = "http://www.omdbapi.com?apikey=713c2744"

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);



    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&t=${title}`);
    const data = await response.json();

    setMovies(data.Type);
  }

  useEffect(() => {
    searchMovies('marvel');
  }, []);



  return (
    <div className="app">
      <h1>Cineplex</h1>

      <div className="search">
        <input placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={searchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

      <div className="container movieType">
          <div onClick={() => searchMovies('movie')}>Movies</div>
          <div onClick={() => searchMovies('series')}>Series</div>
          <div onClick={() => searchMovies('game')}>Games</div>
      </div>



      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }

    </div>
  );
}

export default App;

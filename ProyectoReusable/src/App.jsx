import './App.css'; 
import React, {useState,useEffect} from 'react';
import BuscadorIcono from './buscador.svg';
import TarjetaPeli from './TarjetaPeli';
//a421c82e

const url = 'http://www.omdbapi.com/?apikey=a421c82e';
const movie1 = {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}
const App = () => {
const [movies, setMovies] = useState('');
const [search, setSearch] = useState('');
const buscarPelicula = async (title) => {
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
}
    useEffect(() => {
        buscarPelicula('rocky');
    }, [])
    return (
        <div className="app">
            <h1>Cine Colombia</h1>
            <div className="busqueda">
                <input 
                    type="text" 
                    placeholder="Buscar..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}    
                />
                <img 
                    src={BuscadorIcono} 
                    alt="..." 
                    onClick={() => buscarPelicula(search)}
                />
            </div>
            {movies?.length > 0 ? (
              <div className="container">
                  {movies.map((movie) => (
                      <TarjetaPeli movie1={movie}/>
                  ))}   
              </div>)
              : (
                  <div className="empty">
                      <h2>No hay resultados</h2>
                  </div>
              )}
            
        </div>
    )
}

export default App
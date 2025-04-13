import { useState } from 'react'
import dataMovies from './data/movies'

function App() {

  const [movies, setMovies] = useState(dataMovies);
  const [searchGenre, setSearchGenre] = useState('');

  const findMovies = movies.filter(movie => {
    if (searchGenre === '') return true;
    return movie.genre === searchGenre;
  })

  return (
    <>
      <h1>Film disponibili:</h1>

      <ul>
        {findMovies.map((movie, index) => <li key={index}>
          {movie.title} {'->'} {movie.genre}
        </li>)}
      </ul>

      <select value={searchGenre} onChange={e => setSearchGenre(e.target.value)}>
        <option value="">Nessuno</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>

    </>
  )
}

export default App

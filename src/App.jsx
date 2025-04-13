import { useState } from 'react'
import dataMovies from './data/movies'

function App() {

  return (
    <>
      <h1>Film disponibili:</h1>

      <ul>
        {dataMovies.map((movie, index) => <li key={index}>
          {movie.title} {'->'} {movie.genre}
        </li>)}
      </ul>

      <select>
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

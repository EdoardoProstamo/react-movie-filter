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
    </>
  )
}

export default App

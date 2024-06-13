import React from 'react'
import MovieElement from './MovieElement'

const MovieList = ({movieList,removeMovie}) => {
  return (
  
      <ul className="list">
           {
            movieList.map((el)=>   <MovieElement  movie={el} removeMovie={removeMovie}   />)
           }
   

          </ul>
  
  )
}

export default MovieList

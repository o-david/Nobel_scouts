import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
  return (
    <div className='flex  flex-wrap'>
        {movies.map((movie, index) => 
            <div className='w-[20%]'>
            <MovieCard key={index} title={movie.title} description={movie.description} posterURL={movie.posterURL} rating={movie.rating}/> 
            </div>
        )}
    </div>
  )
}

export default MovieList
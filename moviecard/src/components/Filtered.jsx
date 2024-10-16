import React from 'react'
import MovieCard from './MovieCard'

const Filtered = ({title, movies}) => {
  return (
    <div className='flex  flex-wrap'>
    {   
        title && movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase())).map((movie, index) => 
        <div className='w-[20%]'>
        <MovieCard key={index} title={movie.title} description={movie.description} posterURL={movie.posterURL} rating={movie.rating}/> 
        </div>
    )}
</div>
  )
}

export default Filtered
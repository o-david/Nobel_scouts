import React from 'react'

const MovieCard = ({
  title = "Default Title",
  description = "No description available",
  posterURL = "https://via.placeholder.com/300x450",
  rating = "N/A"
}) => {
  return (
    <div className=' border flex flex-col'>
        <img src={posterURL} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Rating: {rating}</p>
    </div>
  )
}

export default MovieCard
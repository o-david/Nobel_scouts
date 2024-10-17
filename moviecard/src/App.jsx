import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieList from './components/MovieList'
import Filtered from './components/Filtered'
import { movies } from './data'

function App() {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState(0)
  const [allMovies, setMovies] = useState(movies)
  const addMovie = (e)=>{
    e.preventDefault()
    const form = e.target
    const movie = {
      title: form[0].value,
      description: form[1].value,
      posterURL: form[2].value,
      rating: form[3].value
    }
    setMovies([...allMovies, movie])
    form.reset()
  }
  return (
   <>
    <h1>Welcome to the Movie App</h1>
    <h2>Filter By</h2>
    <div className='flex gap-2'>
      <label>
        Movie Title
      </label>
      <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Search movie title' />
      <label>
        Rating
      </label>
      <input type='number' value={rating} onChange={(e)=>setRating(e.target.value)} />

    </div>

    <h2>Add Movie</h2>

    <form onSubmit={addMovie}>
      <input type='text' placeholder='Movie Title' />
      <input type='text' placeholder='Description' />
      <input type='url' placeholder='Poster URL' />
      <input type='number' placeholder='Rating' />
      <button type='submit'>Add Movie</button>
    </form>
    {
      (title||rating)?<Filtered title={title} rating={parseInt(rating)} movies={allMovies}/>:<MovieList movies={allMovies}/>
    }
   </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieList from './components/MovieList'
import Filtered from './components/Filtered'
import { movies } from './data'

function App() {
  const [title, setTitle] = useState('')
  const [allMovies, setMovies] = useState(movies)
  // const [newTitle, setNewTitle] = useState('')  
  // const [newDesc, setDesc] = useState('')  
  // const [newDesc, setDesc] = useState('')  
  return (
   <>
    <h1>Welcome to the Movie App</h1>
    <h2>Filter By</h2>
    <div className='flex gap-2'>
      <label>
        Movie Title
      </label>
      <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Search movie title' />
    </div>
    {/* <h2>Add Movies</h2>
    <form onSubmit={addMovie}>
      <input type='text' placeholder='Enter movie title' />
      <input type='text' placeholder='Enter movie description' />
      <input type='text' placeholder='Enter movie poster URL' />
      <input type='number' placeholder='Enter movie rating' min='0' max='10' />
      <button type='submit'>Add Movie</button>
    </form> */}

    {
      title?<Filtered title={title} movies={allMovies}/>:<MovieList movies={allMovies}/>
    }
   </>
  )
}

export default App

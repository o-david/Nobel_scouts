import React from 'react'
import MovieCard from './MovieCard'

const Filtered = ({title, rating, movies}) => {
  console.log(typeof(rating), movies);
  
  return (
    <div className='[&_div_h2]:bg-slate-500 '>
      <h2> Filtered result</h2>
      {
        (title && !rating)?
        movies
        .filter(movie=>movie.title.toLowerCase().includes(title.toLowerCase()))
        .map((movie,index)=>
          <div className='w-[20%]'>
        <MovieCard key={index} title={movie.title} description={movie.description} posterURL={movie.posterURL} rating={movie.rating}/> 
        </div>
        )
        :(!title && rating)?
        movies
        ?.filter(movie=>movie.rating==rating)
        .map((movie,index)=>
          <div className='w-[20%]'>
        <MovieCard key={index} title={movie.title} description={movie.description} posterURL={movie.posterURL} rating={movie.rating}/> 
        </div>
        ):
        movies
        ?.filter(movie=>movie.rating==rating)
        .filter(movie=>movie.title.toLowerCase().includes(title.toLowerCase()))
        .map((movie,index)=>
          <div className='w-[20%]'>
        <MovieCard key={index} title={movie.title} description={movie.description} posterURL={movie.posterURL} rating={movie.rating}/> 
        </div>
        )
      }

    </div>
    
  )
}

export default Filtered






// first optimization
// import React from 'react'
// import MovieCard from './MovieCard'

// const Filtered = ({title, rating, movies}) => {
//   console.log(typeof(rating), movies);
  
//   return (
//     <div className='[&_div_h2]:bg-slate-500 '>
//       <h2> Filtered result</h2>
//       {
//         movies
//         ?.filter(
//           movie=>{
//             if(title && !rating){
//               return movie.title.toLowerCase().includes(title.toLowerCase())
//             }
//             if(rating && !title){
//               return movie.rating==rating
//             }
//             return movie.rating==rating && movie.title.toLowerCase().includes(title.toLowerCase())
//             })
//         .map((movie,index)=>
//           <div className='w-[20%]'>
//         <MovieCard key={index} title={movie.title} description={movie.description} posterURL={movie.posterURL} rating={movie.rating}/> 
//         </div>
//         )
//       }
//     </div>
    
//   )
// }

// export default Filtered

// second optimization
// import React from 'react'
// import MovieCard from './MovieCard'

// const Filtered = ({title, rating, movies}) => {
//   console.log(typeof(rating), movies);
  
//   return (
//     <div className='[&_div_h2]:bg-slate-500 '>
//       <h2> Filtered result</h2>
//       {
//         movies
//         ?.filter(
//           movie=>{
//             const titleMatch = !title || movie.title.toLowerCase().includes(title.toLowerCase()) 
//             const ratingMatch = !rating || movie.rating==rating
//             return titleMatch && ratingMatch
            
//             })
//         .map((movie,index)=>
//           <div className='w-[20%]'>
//         <MovieCard key={index} title={movie.title} description={movie.description} posterURL={movie.posterURL} rating={movie.rating}/> 
//         </div>
//         )
//       }
//     </div>
    
//   )
// }

// export default Filtered
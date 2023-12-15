import React from 'react'

const MovieCard = ({title, id, poster}) => {
  return (
    <li>
       <img src={`https://image.tmdb.org/t/p/original${poster}`} alt="poster" width='300' />
        <p className="describtion">{title}</p>
        </li>
  )
}

export default MovieCard
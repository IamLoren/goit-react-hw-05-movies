import React from 'react'

const ActorCard = ({name, photo, character}) => {
  return (
    <li>
        <img src={photo ? `https://image.tmdb.org/t/p/original${photo}` : 'https://img.freepik.com/free-vector/shot-concept-illustration_114360-7065.jpg?w=826&t=st=1702759958~exp=1702760558~hmac=ac147e6f1032e40ad076c4ad24885e18d2ca16dddb473b0fbb77c6911c57f43e'} alt="photo" width='200'/>
        <p>{name}</p>
        <p>Character: {character}</p>
    </li>
  )
}

export default ActorCard
import {useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';
import { getAllMovies } from 'services/api';
import ActorCard from 'components/ActorCard/ActorCard';
import { StyledUl } from './Cast.styled';

const Cast = () => {
  const {movieId} =  useParams();

  const [actorsList, setActorsList] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await getAllMovies(`/movie/${movieId}/credits`);
        setActorsList(res.cast);
      } catch (error) {
        console.log(error)
      }
    }
    getMovies()
  },[movieId])

  return (
    <StyledUl>
      {actorsList.map(({id, name, profile_path, character}) => {
        return  <ActorCard key={id} name={name} photo={profile_path} character={character} />
      })}
    </StyledUl>
   
  )
}

export default Cast

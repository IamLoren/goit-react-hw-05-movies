import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllMovies } from "services/api.js";
import ReviewCard from "components/ReviewCard/ReviewCard.jsx";
import styled from "styled-components";

const Reviews = () => {
  const {movieId} =  useParams();
  const [arrOfReview, setArrOfReview] = useState([]);
  console.log(movieId)

useEffect(() => {
  const getMovies = async () => {
    try {
      const res = await getAllMovies(`/movie/${movieId}/reviews`);
      setArrOfReview(res.results);
    } catch (error) {
      console.log(error)
    }
  }
  getMovies()
},[movieId])

console.log(arrOfReview)

  return (
    <>
    {arrOfReview.length > 0 ?  <StyledUl>
      {arrOfReview.map(({author_details, content, created_at}, index) => {
        return <ReviewCard key={index} author_details={author_details} content={content} created_at={created_at}/>
      })}
    </StyledUl> 
  : <p>Sorry, but we don`t have any reviews</p>}
    </>
  )
}

export default Reviews

const StyledUl = styled.ul`
width: 100%;
padding-right: 30px;
padding-left: 30px;
`
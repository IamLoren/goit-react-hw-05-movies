import React from 'react';
import {StyledLi} from '../ReviewCard/ReviewCard'

const ReviewCard = ({author_details, content, created_at}) => {
    const {name, username, avatar_path, rating} = author_details;
  return (
    <StyledLi>
        <div className="user">
            <img src={avatar_path ? `https://image.tmdb.org/t/p/original${avatar_path}` : 'https://img.freepik.com/premium-vector/question-mark-in-person-head-icon-as-unknown-secret-anonym-user-profile-or-doubt-secret-brain-mind_101884-2200.jpg?w=2000'} alt="avatar" width='100' className="avatar" />
            <div className="wrapper">
              <span className="name">Name: {name ? name : "wished to remain unknown"}; </span>
            <span className="userName">Username: {username ? username : "considers their name beautiful enough"}; </span>
            <span className="rating">User`s rating: {rating}</span>
            </div>
            
        </div>
        <p className="review">{content}</p>
        <p>{created_at}</p>
    </StyledLi>
  )
}

export default ReviewCard
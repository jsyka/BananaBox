import React, { useEffect, useState } from 'react';
import star from '../../assets/star.png';
import starnull from '../../assets/star-null.png';
import './RatingComponent.css';

const RatingComponent = ({movieId}) => {
  const [rating, setRating] = useState(4);
  const [isEditingRating, setIsEditingRating] = useState(false);

  useEffect(()=>{
    const savedRating = localStorage.getItem(`rating-${movieId}`);
    if (savedRating) {
      setRating(parseInt(savedRating));
    }
    else {
      setRating(0);
    }
  }, [movieId])

  const handleRating = (givenRating) => {
    if (isEditingRating) {
      setRating(givenRating);
      localStorage.setItem(`rating-${movieId}`, givenRating);
    }
  
  };

  const handleEditRating = () => {
    setIsEditingRating(!isEditingRating);
  };

  return (
    <div className='rating-container'>
      <div className='stars-container'>
        {[1, 2, 3, 4, 5].map((starNumber) => (
          <img
            key={starNumber}
            onClick={() => handleRating(starNumber)}
            src={rating >= starNumber ? star : starnull}
            alt={`star ${starNumber}`}
            style={{ cursor: isEditingRating ? 'pointer' : 'default' }}
          />
        ))}
      </div>
      <button onClick={handleEditRating}>
        {isEditingRating ? 'save' : 'rate'}
      </button>
    </div>
  );
};

export default RatingComponent;

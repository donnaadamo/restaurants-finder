import React, { useState } from "react";
import { ReviewsProps } from "../../Types/Types";

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let currentReview: google.maps.places.PlaceReview;

  if (reviews) {
    currentReview = reviews[currentIndex];
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="review">
      <div className="review__header">
        <div>
          <div className="review__header__name">
            {currentReview!.author_name.toUpperCase()}
          </div>
          <div className="review__header__date">
            {currentReview!.relative_time_description.toLowerCase()}
          </div>
        </div>
        <div className="review__header__rating">
          <img src="/icons/star.svg" alt="rating" />
          {currentReview!.rating?.toFixed(1)}
        </div>
      </div>
      <div className="review__body">{currentReview!.text}</div>
      <div className="review__buttons">
        <div className="review__buttons__back">
          {currentIndex > 0 && (
            <img
              src="/icons/arrowleftsmall.svg"
              onClick={handleBack}
              alt="back"
            />
          )}
        </div>
        <div className="review__buttons__next">
          {currentIndex < reviews.length - 1 && (
            <img
              src="/icons/arrowrightsmall.svg"
              onClick={handleNext}
              alt="next"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

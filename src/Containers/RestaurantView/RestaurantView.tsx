import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRestaurantDetails } from "../../Api/googleApi";
import Reviews from "../../Components/Reviews/Reviews";
import GLOBAL from "../../Utils/Global";

const RestaurantView: React.FC = () => {
  const location = useLocation();
  const placeId = location.state?.placeId;
  const [restaurant, setRestaurant] = useState<
    google.maps.places.PlaceResult | undefined
  >();

  useEffect(() => {
    getRestaurantDetails(placeId, setRestaurant);
  }, [placeId]);

  return (
    <div className="view">
      {restaurant && (
        <div className="view__box">
          <div className="view__box__header">
            <div className="view__box__header__location">
              {restaurant.name!.toUpperCase()} |{" "}
              <div className="view__box__header__location__address">
                {restaurant.vicinity}
              </div>
            </div>
            {restaurant.rating && (
              <div className="view__box__header__rating">
                <img src="/icons/star.svg" alt="rating" />
                {restaurant.rating}
              </div>
            )}
          </div>
          <div className="view__box__body">
            {restaurant.photos && (
              <img
                src={restaurant.photos?.[0]?.getUrl({
                  maxWidth: 400,
                  maxHeight: 400,
                })}
                alt={restaurant.name}
                className="view__box__body__photo"
              />
            )}
            {restaurant.reviews && restaurant.reviews.length > 0 ? (
              <Reviews reviews={restaurant.reviews} />
            ) : (
              <div className="view__box__body__error">
                {GLOBAL.RESTAURANT_VIEW.ERROR}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantView;

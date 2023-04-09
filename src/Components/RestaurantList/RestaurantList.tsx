import React, { CSSProperties } from "react";
import { Restaurant, RootReducer } from "../../Types/Types";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const RestaurantList: React.FC = () => {
  const { restaurants, loading } = useSelector(
    (state: RootReducer) => state.restaurants
  );

  return (
    <>
      <PacmanLoader cssOverride={override} loading={loading} />
      {!loading && restaurants.length > 0 && (
        <div className={`restaurantlist`}>
          {restaurants.map((restaurant: Restaurant) => (
            <Card key={restaurant.placeId}>
              <Link
                to={`/restaurant/${restaurant.placeId}`}
                state={{ placeId: restaurant.placeId }}
                className="restaurantlist__link"
              >
                <div className="restaurantlist__item">
                  <div className="restaurantlist__item__place">
                    {restaurant.name}
                  </div>
                  <div className="restaurantlist__item__rating">
                    {restaurant.rating}
                    <img src="/icons/star.svg" alt="rating" />
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

export default RestaurantList;

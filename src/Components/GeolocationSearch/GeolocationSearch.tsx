import React from "react";
import { getRestaurantList } from "../../Api/googleApi";
import Card from "../Card/Card";
import store from "../../Store/store";
import { setLoading } from "../../Store/restaurantSlice";
import GLOBAL from "../../Utils/Global";
import { GeolocationSearchProps } from "../../Types/Types";

const GeolocationSearch: React.FC<GeolocationSearchProps> = ({
  setByAddresSelected,
}) => {
  const getLocation = () => {
    setByAddresSelected(false);
    store.dispatch(setLoading(true));
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getRestaurantList(latitude, longitude);
        },
        () => {
          alert(GLOBAL.GEOLOCATION_SEARCH.ERROR);
          store.dispatch(setLoading(false));
        }
      );
    }
  };

  return (
    <Card>
      <div className="geolocationsearch" onClick={getLocation}>
        <div className="geolocationsearch__text">
          {GLOBAL.GEOLOCATION_SEARCH.TITLE}
        </div>
        <img src="/icons/arrowright.svg" alt="plus" />
      </div>
    </Card>
  );
};

export default GeolocationSearch;

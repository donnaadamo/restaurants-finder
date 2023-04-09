import React, { useState } from "react";
import AddressSearch from "../../Components/AddressSearch/AddressSearch";
import GeolocationSearch from "../../Components/GeolocationSearch/GeolocationSearch";
import RestaurantList from "../../Components/RestaurantList/RestaurantList";
import GLOBAL from "../../Utils/Global";

const FindRestaurants = () => {
  const [byAddresSelected, setByAddresSelected] = useState(false);

  return (
    <div className="search">
      <div className="search__left">
        <div className="search__left__title">
          {GLOBAL.FIND_RESTAURANTS.TITLE}
        </div>
        <div className="search__left__buttons">
          <AddressSearch
            byAddresSelected={byAddresSelected}
            setByAddresSelected={setByAddresSelected}
          />
          <GeolocationSearch setByAddresSelected={setByAddresSelected} />
        </div>
      </div>
      <div className="search__right">
        <RestaurantList />
      </div>
    </div>
  );
};

export default FindRestaurants;

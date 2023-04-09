import React, { useRef } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { getRestaurantList } from "../../Api/googleApi";
import Card from "../Card/Card";
import GLOBAL from "../../Utils/Global";
import { AddressSearchProps } from "../../Types/Types";

const AddressSearch: React.FC<AddressSearchProps> = ({
  byAddresSelected,
  setByAddresSelected,
}) => {
  const autoCompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const handlePlaceSelect = () => {
    const place = autoCompleteRef.current?.getPlace();
    getRestaurantList(
      place?.geometry?.location?.lat() ?? 0,
      place?.geometry?.location?.lng() ?? 0
    );
  };

  return (
    <Card>
      <div className="addressearch" onClick={() => setByAddresSelected(true)}>
        {byAddresSelected ? (
          <Autocomplete
            onLoad={(autoComplete) => (autoCompleteRef.current = autoComplete)}
            onPlaceChanged={handlePlaceSelect}
          >
            <input
              id="autocomplete"
              type="text"
              placeholder={GLOBAL.ADDRESS_SEARCH.INPUT}
              className="addressearch__input"
            />
          </Autocomplete>
        ) : (
          <div className="addressearch__title">
            {GLOBAL.ADDRESS_SEARCH.TITLE}
          </div>
        )}
        <img src="/icons/arrowright.svg" alt="plus" />
      </div>
    </Card>
  );
};

export default AddressSearch;

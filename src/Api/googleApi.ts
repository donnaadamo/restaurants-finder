import { setLoading, setRestaurantsData } from "../Store/restaurantSlice";
import store from "../Store/store";
import GLOBAL from "../Utils/Global";

const mapElement = document.getElementById("map");

export const getRestaurantList = (latitude: number, longitude: number) => {
  store.dispatch(setLoading(true));

  const map = new google.maps.Map(mapElement!);

  const service = new google.maps.places.PlacesService(map);

  service.nearbySearch(
    {
      location: { lat: latitude, lng: longitude },
      radius: 500,
      type: GLOBAL.API.TYPE,
    },
    (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        const firstTen = results
          .slice(0, 10)
          .sort(
            (
              a: google.maps.places.PlaceResult,
              b: google.maps.places.PlaceResult
            ) => (b.rating || 0) - (a.rating || 0)
          );
        store.dispatch(
          setRestaurantsData(
            firstTen.map((result) => ({
              placeId: result.place_id!,
              name: result.name!,
              rating:
                (result.rating && result.rating.toFixed(1)) || GLOBAL.API.NA,
            }))
          )
        );
      }
      if (
        status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS &&
        results
      ) {
        alert(GLOBAL.API.ERROR);
      }

      store.dispatch(setLoading(false));
    }
  );
};

export const getRestaurantDetails = (
  placeId: string,
  setRestaurantDetail: (newValue: google.maps.places.PlaceResult) => void
) => {
  const map = new google.maps.Map(mapElement!);

  const service = new google.maps.places.PlacesService(map);

  service.getDetails(
    {
      placeId: placeId,
    },
    (result, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && result) {
        setRestaurantDetail(result);
      }
    }
  );
};

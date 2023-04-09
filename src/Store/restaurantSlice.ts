import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Restaurant, RestaurantsState } from "../Types/Types";
import GLOBAL from "../Utils/Global";

const initialState: RestaurantsState = {
  restaurants: [],
  reviews: {},
  loading: false,
};

export const restaurantSlice = createSlice({
  name: GLOBAL.REDUX.SLICE_NAME,
  initialState,
  reducers: {
    setRestaurantsData(state, action: PayloadAction<Restaurant[]>) {
      state.restaurants = action.payload;
    },
    setRestaurantReviews(
      state,
      action: PayloadAction<{
        placeId: string;
        reviews: google.maps.places.PlaceReview[] | undefined;
      }>
    ) {
      const { placeId, reviews } = action.payload;
      state.reviews[placeId] = reviews;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setRestaurantsData, setRestaurantReviews, setLoading } =
  restaurantSlice.actions;

export default restaurantSlice.reducer;

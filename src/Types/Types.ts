import restaurantsReducer from "../Store/restaurantSlice";

import { ReactNode } from "react";

export type PlacePhoto = {
  height: number;
  width: number;
  photo_reference: string;
  html_attributions: string[];
  getUrl(options: { maxWidth?: number; maxHeight?: number }): string;
};

export type Restaurant = {
  placeId: string;
  name: string;
  vicinity?: string;
  photos?: PlacePhoto[];
  rating?: string;
  reviews?: Review[];
};

export type Review = {
  author_name: string;
  rating: string;
  text: string;
  relative_time_description: string;
  id: string;
};

export type Position = {
  latitude: number;
  longitude: number;
};

export type RestaurantsState = {
  restaurants: Restaurant[];
  reviews: {
    [key: string]: google.maps.places.PlaceReview[] | undefined;
  };
  loading: boolean;
};

export type RootReducer = {
  restaurants: ReturnType<typeof restaurantsReducer>;
  reviews: ReturnType<typeof restaurantsReducer>;
};

export type ButtonCustomProps = {
  description: string;
  className: string;
  handleClick?: () => void;
  disabled?: boolean;
};

export type RestaurantListProps = {
  restaurant: Restaurant;
};

export type AddressSearchProps = {
  byAddresSelected: boolean;
  setByAddresSelected: (newValue: boolean) => void;
};

export type CardProps = {
  children: ReactNode;
};

export type GeolocationSearchProps = {
  setByAddresSelected: (newValue: boolean) => void;
};

export type ReviewsProps = {
  reviews: google.maps.places.PlaceReview[];
};

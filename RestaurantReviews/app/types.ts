export type Review = {
  name: string;
  review: string;
  rating: number;
};

export type RestaurantProps = {
  name: string;
  address: string;
  phone: string;
  reviews: Review[];
};

export type RestaurantContextType = {
  restaurants: RestaurantProps[];
};

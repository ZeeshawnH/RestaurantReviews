export type Review = {
  name: string;
  review: string;
  rating: number;
};

export type Restaurant = {
  name: string;
  address: string;
  phone: string;
  reviews: Review[];
};

export type RestaurantContextType = {
  restaurants: Restaurant[];
  getRestaurantByName: (name: string) => Restaurant | undefined;
};

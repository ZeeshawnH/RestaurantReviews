import { RestaurantProps, Review } from "./types";

const reviews: Review[] = [
  {
    name: "Herbert",
    review:
      "The food was delicious and the service was great. I will definitely be coming back soon!",
    rating: 5,
  },
  {
    name: "Name",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius unde mollitia temporibus eaque? Exercitationem qui porro laboriosam enim. Natus voluptates quibusdam aliquam repudiandae necessitatibus porro deserunt tempora similique minima illum?",
    rating: 5,
  },
  {
    name: "Name",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius unde mollitia temporibus eaque? Exercitationem qui porro laboriosam enim. Natus voluptates quibusdam aliquam repudiandae necessitatibus porro deserunt tempora similique minima illum?",
    rating: 5,
  },
];

const MeatAndBite: RestaurantProps = {
  name: "Meat & Bite",
  address: "2908 Hillsborough St, Raleigh, NC, 27606",
  phone: "(919) 803-0025",
  reviews,
};

export const initialRestaurants: RestaurantProps[] = [MeatAndBite];

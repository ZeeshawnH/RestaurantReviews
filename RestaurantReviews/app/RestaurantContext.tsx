import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react";
import { RestaurantContextType, Restaurant, Review } from "./types";
import { initialRestaurants } from "./mocks";

const RestaurantContext = createContext<RestaurantContextType | undefined>(
  undefined
);

export const useRestaurantContext = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error(
      "useRestaurantContext must be used within a RestaurantProvider"
    );
  }
  return context;
};

type RestaurantProviderProps = {
  children: ReactNode;
};

export const RestaurantProvider = ({ children }: RestaurantProviderProps) => {
  const [restaurants, setRestaurants] =
    useState<Restaurant[]>(initialRestaurants);

  const getRestaurantByName = (name: string) => {
    return restaurants.find((restaurant) => restaurant.name === name);
  };

  return (
    <RestaurantContext.Provider value={{ restaurants, getRestaurantByName }}>
      {children}
    </RestaurantContext.Provider>
  );
};

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import RestaurantScreen from "./restaurant";
import { Link } from "expo-router";
import { useRestaurantContext } from "./RestaurantContext";
import { Restaurant } from "./types";

export default function Index() {
  const { restaurants } = useRestaurantContext();
  const heroImage = require("../assets/images/MeatAndBite.jpg");

  return (
    <View>
      {restaurants.map((restaurant: Restaurant, i: number) => (
        <Pressable>
          <Link
            key={i}
            href={{
              pathname: "/restaurant",
              params: { name: restaurant.name },
            }}
          >
            <ThemedText>{restaurant.name}</ThemedText>
          </Link>
        </Pressable>
      ))}
      <Text>Edit app/index.tsx to edit this screen</Text>
    </View>
  );
}

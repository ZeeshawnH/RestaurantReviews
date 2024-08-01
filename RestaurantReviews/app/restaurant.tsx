import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useContext } from "react";
import { useLocalSearchParams } from "expo-router";
import { Text, View, Image } from "react-native";
import { useRestaurantContext } from "./RestaurantContext";

export default function RestaurantScreen() {
  const { name } = useLocalSearchParams();
  const { getRestaurantByName } = useRestaurantContext();

  const headerImage = require("../assets/images/MeatAndBite.jpg");

  const restaurant = getRestaurantByName(name as string);

  const displayStars = (rating: number) => {
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += "⭐️";
    }
    return stars;
  };

  const reviews = restaurant?.reviews.map((review, i) => (
    <ThemedView
      style={{
        padding: 8,
        backgroundColor: "#ededed",
        borderRadius: 8,
      }}
      key={i}
    >
      <ThemedText type="defaultSemiBold">{review.name}</ThemedText>
      <ThemedText>{review.review}</ThemedText>
      <ThemedText>{displayStars(review.rating)}</ThemedText>
    </ThemedView>
  ));

  return (
    <ParallaxScrollView
      headerImage={<Image source={headerImage} className="w-full h-full" />}
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    >
      <ThemedView>
        <ThemedText type="title">{restaurant?.name}</ThemedText>
        <ThemedText type="defaultSemiBold">{restaurant?.address}</ThemedText>
        <ThemedText type="link">(919) 803-0025</ThemedText>
      </ThemedView>
      {restaurant?.reviews && restaurant?.reviews.length > 0 && (
        <ThemedView style={{ gap: 4 }}>
          <ThemedText type="subtitle" style={{ paddingVertical: 4 }}>
            What People Are Saying
          </ThemedText>
          {reviews}
        </ThemedView>
      )}
    </ParallaxScrollView>
  );
}

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useContext } from "react";
import { Text, View, Image } from "react-native";
import { useRestaurantContext } from "./RestaurantContext";

export default function Restaurant() {
  const { restaurants } = useRestaurantContext();

  const headerImage = require("../assets/images/MeatAndBite.jpg");

  const reviews = restaurants[0].reviews;

  const displayStars = (rating: number) => {
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += "⭐️";
    }
    return stars;
  };

  const displayReviews = reviews.map((review, i) => (
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
      <ThemedText>⭐️⭐️⭐️⭐️⭐️</ThemedText>
    </ThemedView>
  ));

  return (
    <ParallaxScrollView
      headerImage={<Image source={headerImage} className="w-full h-full" />}
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    >
      <ThemedView>
        <ThemedText type="title">{restaurants[0].name}</ThemedText>
        <ThemedText type="defaultSemiBold">{restaurants[0].address}</ThemedText>
        <ThemedText type="link">(919) 803-0025</ThemedText>
      </ThemedView>
      <ThemedView style={{ gap: 4 }}>
        <ThemedText type="subtitle" style={{ paddingVertical: 4 }}>
          What People Are Saying
        </ThemedText>
        {displayReviews}
      </ThemedView>
    </ParallaxScrollView>
  );
}

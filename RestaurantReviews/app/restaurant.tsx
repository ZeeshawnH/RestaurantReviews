import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { Text, View, Image } from "react-native";

export default function Restaurant() {
  const headerImage = require("../assets/images/MeatAndBite.jpg");

  const reviews = [
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
        <ThemedText type="title">Meat & Bite</ThemedText>
        <ThemedText type="defaultSemiBold">
          2908 Hillsborough St, Raleigh, NC, 27606
        </ThemedText>
        <ThemedText type="link">(919) 803-0025</ThemedText>
      </ThemedView>
      <ThemedView style={{ gap: 4 }}>
        <ThemedText type="subtitle" style={{ paddingVertical: 4 }}>
          What People Are Saying
        </ThemedText>
        {displayReviews}
        {/* <ThemedView
          style={{
            padding: 8,
            backgroundColor: "#ededed",
            borderRadius: 8,
          }}
        >
          <ThemedText type="defaultSemiBold">{reviews[0].name}</ThemedText>
          <ThemedText>
            "The food was delicious and the service was great. I will definitely
            be coming back soon!"
          </ThemedText>
          <ThemedText>⭐️⭐️⭐️⭐️⭐️</ThemedText>
        </ThemedView>
        <ThemedView
          style={{
            padding: 8,
            backgroundColor: "#ededed",
            borderRadius: 8,
          }}
        >
          <ThemedText type="defaultSemiBold">Name</ThemedText>
          <ThemedText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius unde
            mollitia temporibus eaque? Exercitationem qui porro laboriosam enim.
            Natus voluptates quibusdam aliquam repudiandae necessitatibus porro
            deserunt tempora similique minima illum?
          </ThemedText>
          <ThemedText>⭐️⭐️⭐️⭐️⭐️</ThemedText>
        </ThemedView>
        <ThemedView
          style={{
            padding: 8,
            backgroundColor: "#ededed",
            borderRadius: 8,
          }}
        >
          <ThemedText type="defaultSemiBold">Name</ThemedText>
          <ThemedText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius unde
            mollitia temporibus eaque? Exercitationem qui porro laboriosam enim.
            Natus voluptates quibusdam aliquam repudiandae necessitatibus porro
            deserunt tempora similique minima illum?
          </ThemedText>
          <ThemedText>⭐️⭐️⭐️⭐️⭐️</ThemedText>
        </ThemedView> */}
      </ThemedView>
    </ParallaxScrollView>
  );
}

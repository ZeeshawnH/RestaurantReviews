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
import Restaurant from "./restaurant";
import { Link } from "expo-router";

export default function Index() {
  const heroImage = require("../assets/images/MeatAndBite.jpg");

  return (
    <View>
      <Pressable>
        <Link href="/restaurant">
          <ThemedText>Meat & Bite</ThemedText>
        </Link>
      </Pressable>
      <Text>Edit app/index.tsx to edit this screen</Text>
    </View>
  );
}

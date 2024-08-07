import { Stack } from "expo-router";
import { RestaurantProvider } from "./RestaurantContext";

export default function RootLayout() {
  return (
    <RestaurantProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: true }} />
        <Stack.Screen name="restaurant" />
      </Stack>
    </RestaurantProvider>
  );
}

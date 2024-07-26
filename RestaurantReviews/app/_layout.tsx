import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="restaurant" />
      <Stack.Screen name="index" options={{ headerShown: true }} />
    </Stack>
  );
}

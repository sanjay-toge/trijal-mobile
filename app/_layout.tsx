import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="(home-tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" />
      {/* <Stack.Screen name="details" /> */}
    </Stack>
  );
}

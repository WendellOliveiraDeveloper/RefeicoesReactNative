import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeView from "@/views/home/HomeView";
import DashboardView from "@/views/dashboard/DashboardView";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6200ee",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeView}
        options={{ title: "Página Inicial", headerShown: false }}
      />
      <Stack.Screen name="Dashboard" component={DashboardView} />
    </Stack.Navigator>
  );
}

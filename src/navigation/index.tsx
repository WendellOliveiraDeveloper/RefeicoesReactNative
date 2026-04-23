import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeView from "@/views/home/HomeView";
import DashboardView from "@/views/dashboard/DashboardView";
import RefeicaoView from "@/views/refeicao/RefeicaoView";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#DDDEDF",
        },
        headerTintColor: "#000000",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeView}
        options={{ title: "Página Inicial", headerShown: false }}
      />
      <Stack.Screen name="Dashboard" component={DashboardView} />
      <Stack.Screen
        name="Refeicao"
        component={RefeicaoView}
        options={{ title: "Refeição" }}
        
      />
    </Stack.Navigator>
  );
}

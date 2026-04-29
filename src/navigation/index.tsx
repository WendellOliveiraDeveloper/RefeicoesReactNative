import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeView from "@/views/home/HomeView";
import DashboardView from "@/views/dashboard/DashboardView";
import RefeicaoView from "@/views/refeicao/RefeicaoView";
import ResultadoView from "@/views/resultado/ResultadoView";
import EdicaoView from "@/views/edicao/EdicaoView";

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
      <Stack.Screen
        name="Resultado"
        component={ResultadoView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edicao"
        component={EdicaoView}
        options={{ title: "Edição" }}
      />
    </Stack.Navigator>
  );
}

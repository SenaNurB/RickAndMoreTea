import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "@screens/HomeScreen";
import EpisodeScreen from "@screens/EpisodeScreen";
import CharacterDetail from "@screens/CharacterDetail";
import SplashScreen from "@screens/SplashScreen";

import { screenOptions } from "./config";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Episode" component={EpisodeScreen} />
        <Stack.Screen name="Character Detail" component={CharacterDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

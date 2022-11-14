import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { LuncheonetteScreen } from "./src/features/luncheonette/screens/luncheonette.screen";
import { SafeArea } from "./src/components/utility/safe-area.component";
function SettingScreen() {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}
function MapScreen() {
  return (
    <SafeArea>
      <Text>Map!</Text>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Luncheonette") {
            iconName = focused ? "md-restaurant" : "md-restaurant-outline";
          } else if (route.name === "Map") {
            iconName = focused ? "md-map-sharp" : "md-map-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "md-settings-sharp" : "md-settings-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Luncheonette" component={LuncheonetteScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}

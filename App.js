import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import { HomeScreen } from "./src/screens/HomeScreen";
import { CountryDetails } from "./src/screens/CountryDetails";
import { theme } from "./src/theme";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CountryDetails" component={CountryDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

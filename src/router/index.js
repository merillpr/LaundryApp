import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as Pages from "../pages";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <>
      <StatusBar backgroundColor="#ffffff" barStyle={"dark-content"} />
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Pages.Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Order"
          component={Pages.Order}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Account"
          component={Pages.Account}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Pages.Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});

import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from "react-native";
// import คอมโพเนนต์ที่จำเป็น
import { NavigationContainer } from '@react-navigation/native';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { CategoryMealsScreen } from './screens/CategoryMealsScreen';
import { MealDetailScreen } from './screens/MealDetailScreen';
import MainNav from "./navigation/MyNavigator";
export default function App() {

  return <MainNav />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});

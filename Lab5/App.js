import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from "react-native";
// import คอมโพเนนต์ที่จำเป็น
import { NavigationContainer } from '@react-navigation/native';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { CategoryMealsScreen } from './screens/CategoryMealsScreen';
import { MealDetailScreen } from './screens/MealDetailScreen';

const MealsNavigator = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <MealsNavigator.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#4a148c", }
          , headerTintColor: "white",
        }}
      >
        <MealsNavigator.Screen name="Categories" component={CategoriesScreen}
          options={{
            title: "Meal Categories",
          }} />
        <MealsNavigator.Screen name="CategoryMeals" component={CategoryMealsScreen}
          options={
            ({ route }) => ({
              title: route.params.Title,
            })} />

        <MealsNavigator.Screen name="MealDetail" component={MealDetailScreen}
          options={
            ({ route }) => ({
              title: route.params.Title,
            })} />
      </MealsNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});

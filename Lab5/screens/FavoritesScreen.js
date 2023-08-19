import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import {MEALS} from "../data/dummy-data";
const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
const FavoritesScreen = ({ route, navigation }) => {
  return (
    
      <MealList listData={favMeals} navigation={navigation} />
  
      // ส่วนนี้ <View>...</View> ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <MealItem> ข้างบนแทน
      // <View style={{ height: 50, width: "40%" }}>
      //   <Text>{itemData.item.title}</Text>
      // </View>
    
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;

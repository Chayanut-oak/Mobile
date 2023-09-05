import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from "react-native";
// import คอมโพเนนต์ที่จำเป็น
import Icon from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import Parallel from "../screen/Parallel";
import Spring from "../screen/Spring";
import Sequence from "../screen/Sequence";

const TabNavigator = createBottomTabNavigator();

export default function TabNav() {
  return (
    <NavigationContainer>
       <TabNavigator.Navigator >
        <TabNavigator.Screen name="Spring" options={{ headerShown: false }} component={Spring} />
        <TabNavigator.Screen name="Sequence" options={{ headerShown: false }} component={Sequence} />
        <TabNavigator.Screen name="Parallel" options={{ headerShown: false }} component={Parallel} />
      </TabNavigator.Navigator>
    </NavigationContainer>
     

    
  );
}

 






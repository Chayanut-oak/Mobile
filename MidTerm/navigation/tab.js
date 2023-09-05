import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from "react-native";
// import คอมโพเนนต์ที่จำเป็น
import Icon from 'react-native-vector-icons/Ionicons';
import { Home } from "../screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import { Programs } from "../screens/Programs";
import Detail from "../screens/Detail";
import Viewstudy from "../screens/Viewstudy";

const TabNavigator = createBottomTabNavigator();
const MainNavigator = createNativeStackNavigator();
const DataNavigator = createNativeStackNavigator();

export default function TabNav() {
  return (
    <NavigationContainer>
       <TabNavigator.Navigator >
        <TabNavigator.Screen name="Home" options={{ headerShown: false }} component={Home} />
        
        <TabNavigator.Screen name="Programs" options={{ headerShown: false }} component={MainNav} />
        
      </TabNavigator.Navigator>
    </NavigationContainer>
     

    
  );
}
 function  MainNav() {
    return (
        <MainNavigator.Navigator >
          <MainNavigator.Screen name="Program"  options={{ headerShown: false }}  component={Programs} />
          <MainNavigator.Screen name="Detail"  options={({ route }) => ({title: route.params.Title , headerStyle:{backgroundColor:"lightblue"}}) }  component={Detail} />
          <MainNavigator.Screen name="Viewstudy" options={{ headerShown: true }} component={Viewstudy} />
        </MainNavigator.Navigator>
    );
  }
 






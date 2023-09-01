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
function TabNav() {
    

  return (
      <TabNavigator.Navigator >
        <TabNavigator.Screen name="Home" options={{ headerShown: false }} component={Home} />
        
        <TabNavigator.Screen name="Programs" options={{ headerShown: false }} component={Programs} />
        
      </TabNavigator.Navigator>

    
  );
}
export default function  MainNav() {
    

    return (
      <NavigationContainer>
        <MainNavigator.Navigator >
          <MainNavigator.Screen name="Home" options={{ headerShown: false }} component={TabNav} />
          <MainNavigator.Screen name="Detail"  options={({ route }) => ({title: route.params.Title})}  component={Detail} />
          <MainNavigator.Screen name="Viewstudy" options={{ headerShown: true }} component={Viewstudy} />
        </MainNavigator.Navigator>
      </NavigationContainer>
      
    );
  }
  function  DataNav() {
    return (
   
        <DataNavigator.Navigator >

          <DataNavigator.Screen name="Detail"  options={
          ({ route }) => ({
            title: route.params.Title,
          })}  component={Detail} />
          <DataNavigator.Screen name="Viewstudy" options={{ headerShown: true }} component={Viewstudy} />
        </DataNavigator.Navigator>
    );
  }






import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewStu from '../screen/ViewStu';
import AddStu from '../screen/AddStu';
import Update from '../screen/Update';
const MainNavigate = () => {
    const ViewNav = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <ViewNav.Navigator>
            <ViewNav.Screen name="Add Students" component={AddStu}/>
            <ViewNav.Screen name="Student List" component={ViewStu}/>
            <ViewNav.Screen name="Student Info" component={Update}/>
        </ViewNav.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigate

const styles = StyleSheet.create({})
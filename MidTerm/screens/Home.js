import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require('../IT_Logo.png')}
          resizeMode='contain'
        />
        <Text style={styles.titleText} >
          {"คณะเทคโนโลยีสารสนเทศ"}
        </Text>
        <Text >
          {"สถาบันเทคโนโลยีพระจอมเกล้าคุณทหารลาดกระบัง"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containers: {
    margin: 10,
    width: 300,
    flex: 2
  },
  button1: {
    margin: 8,

  },
  button2: {
    margin: 8,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 8
  },
  containers1: {
    backgroundColor: '#00ffff',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    height: 100,
  },
  conmage: {
    justifyContent: 'flex-end',
    marginBottom: 10,
    marginLeft: 10
  },
  context: {
    justifyContent: 'flex-end',
    margin: 10,
    marginRight: 60
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export { Home }
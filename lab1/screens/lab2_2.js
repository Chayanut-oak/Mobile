import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const Lab2_2 = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1)
  const image = [{ src: require('../course-bach-it.jpg'), name: 'Information Technology' },
  { src: require('../course-bach-dsba.jpg'), name: 'Data Science and Business Analytics' },
  { src: require('../course-bach-bit.jpg'), name: 'Business Information Technology', name2: '(International Program)' },
  { src: require('../course-bach-ait.jpg'), name: 'Artificial Intelligence Technology' },
  ]

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.containers1}>
        <View style={styles.conmage}>
          <Image style={{ width: 60, height: 60 }}
            source={require('../IT_Logo.png')}
          />
        </View>
        <View style={styles.context}>
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'blue' }} >
            {'Programs'}
          </Text>
        </View>
      </View>
      <FlatList data={image}
        keyExtractor={(item, index) => index}
        renderItem={({item,index}) => {
          return (
              <View key={index}>
                <Image source={item.src} />
                <View >
                  <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text>{!item.name2 ? '\n' : ''}{item.name}</Text>
                    <Text>{index == 2 ? item.name2 : ""}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}}
      />
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
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
export  {Lab2_2}
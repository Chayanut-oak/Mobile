import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,Button
} from "react-native";
import { round } from "react-native-reanimated";

const Programs = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);
  const image = [
    { id :"0",src: require("../course-bach-it.jpg"), name: "IT" ,name2: "4 years",},
    {
        id :"1",
      src: require("../course-bach-dsba.jpg"),
      name: "DSBA",
      name2: "4 years",
    },
    {
        id :"2",
      src: require("../course-bach-bit.jpg"),
      name: "BIT",
      name2: "4 years",
    },
    {
        id :"3",
      src: require("../course-bach-ait.jpg"),
      name: "AIT",
      name2: "4 years",
    },
  ];

  return (
    <View style={{ flex: 2 }}>
      <View style={styles.containers1}>
        <View style={styles.context}>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "blue" }}>
            {"Bachelor Programs"}
          </Text>
        </View>
      </View>

      <FlatList 
        data={image}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => {
          return (
            <View key={index} style={styles.containers2}>
              <Image style={styles.image} source={item.src} />
              <View style={styles.button}>
                  <Text style={{ fontSize: 20, fontWeight: "bold"}}>
                    {item.name}
                  </Text>
                  <Text>{item.name2}</Text>
                  <Button
                    onPress={() => navigation.navigate("Detail", {ID: item.id, Title:item.name})}
                    title="READ MORE"
                    color="#1e90ff"
                  />
                </View>
               
              </View>
          );
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  containers1: {
    backgroundColor: "#00ffff",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    height: 100,
  },
  containers2: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  containers3: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    height: 100,
  },
  conmage: {
    justifyContent: "flex",
    marginBottom: 10,
    marginLeft: 10,
  },
  context: {
    justifyContent: "flex-end",
    margin: 10,
    marginRight: 60,
  },
  button: {

    justifyContent: "center",
    alignItems: "center",
    
  },image:{
    width: "60%" ,
    height: 180,
    margin: 10,
    
  }
});
export { Programs };

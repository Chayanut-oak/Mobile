import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const Spring = (props) => {
  const springVal = useRef(new Animated.Value(0.3)).current;

  const spring = () => {
    Animated.spring(springVal, {
      toValue: 1,
      friction: 1,
    }).start(() => { springVal.setValue(0.3); });
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Animated.Image
          style={{ width: 180, height: 150, transform: [{ scale: springVal }] }}
          source={require("../IT_Logo.png")}
        />
      </View>
      <View style={styles.button}>
        <Button title="Spin" onPress={spring} />
      </View>

    </View>
  )
}

export default Spring

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center"
    , flex: 1,
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 150,
  },
  button: {

  }
})
import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const Parallel = (props) => {
    const springVal = useRef(new Animated.Value(0.3)).current;
    const springVal2 = useRef(new Animated.Value(0)).current;
    const translateX = springVal2.interpolate({ 
        inputRange: [0, 0.5,1,1.5,2,2.5],
        outputRange: [0, -100,100,-70,70,0]
        }) 
    const animate = () => {
        Animated.parallel([
            Animated.spring(springVal, {
                toValue: 1,
                friction: 1,
                useNativeDriver: true,
            }),
            Animated.timing(springVal2, {
                toValue: 2.5,
                duration: 4000,
                friction: 1,
                useNativeDriver: true,
            }),
        ]).start(() => {
            springVal.setValue(0.3),
            springVal2.setValue(0);
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Animated.Image
                    style={{ width: 180, height: 150, transform: [{ scale: springVal }] }}
                    source={require("../IT_Logo.png")}
                />
                <Animated.Text style={{transform:[{translateX: translateX}]}}>
                    Welcome to Faculty of IT!
                </Animated.Text>
            </View>

            <View style={styles.button}>
                <Button title="RUN PARALLEL" onPress={animate} />
            </View>

        </View>
    )
}

export default Parallel

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
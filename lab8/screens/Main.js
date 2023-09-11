import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing, PanResponder } from "react-native";


const Main = () => {
    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            pan.setOffset({
                x: pan.x._value,
                y: pan.y._value,
            });
            pan.setValue({ x: 0, y: 0 });
        },
        onPanResponderMove: (evt, gestureState) => {
            const touches = evt.nativeEvent.touches;
            if (touches.length == 2) {
                Animated.spring(scale, {
                    toValue: 3,
                    friction: 3,
                    useNativeDriver: false,
                }).start();
            } else if (touches.length == 1) {
                pan.setValue({ x: gestureState.dx, y: gestureState.dy });
            }
        },
        onPanResponderRelease: () => {
            pan.flattenOffset();
            Animated.spring(scale, {
                toValue: 1,
                friction: 3,
                useNativeDriver: false,

            }).start();
        },
    });
    const scale = useRef(new Animated.Value(1)).current;

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Animated.Image   {...panResponder.panHandlers}
                    style={[pan.getLayout(), styles.box, { transform: [{ scale: scale }] }]}
                    source={require("../IT_Logo.png")}
                />
            </View>
        </View>
    )
}


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
    box: {
        width: 180,
        height: 150
    }
})
export default Main
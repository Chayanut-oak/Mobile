import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button ,Easing} from "react-native";

const Sequence = (props) => {

    const fadeAnim = useRef(new Animated.Value(1)).current;
    const spinAnim = useRef(new Animated.Value(0)).current;
    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
        });
    const animate = () => {
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 2000,
                useNativeDriver: true,
            }),Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }), Animated.timing(spinAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            })
        ]).start(() => { spinAnim.setValue(0), fadeAnim.setValue(0) ,fadeAnim.setValue(1)});
    }
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Animated.Image 
                    style={ [styles.fadingContainer,{ opacity: fadeAnim,transform: [{ rotate: spin }]}]}
                    source={require("../IT_Logo.png")}
                    resizeMode={"contain"}
                />
            </View>
            <View style={styles.button}>
                <Button title="RUN SEQUENCE" onPress={animate} />
            </View>
        </View>
    )
}

export default Sequence

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      fadingContainer: {
        width: 250,
        height: 150,
      },container1: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 150,
      },
      button:{
        width:"100%"
      }

})
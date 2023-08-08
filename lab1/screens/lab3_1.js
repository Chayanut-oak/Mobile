import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  Alert,
  value
} from "react-native";
const Lab3_1 = () => {
  const [InputDATA, setInputData] = useState("");
  const [InputDATA2, setInputData2] = useState([]);
  const addElementToArray = () => {
    if(InputDATA){
      InputDATA2.push(InputDATA.toString());
      setInputData("");
    }
    console.log(InputDATA2)
    console.log(InputDATA)
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>สมุดบันทึก</Text>
      <TextInput
        value={InputDATA}
        placeholder="Enter Value here"
        onChangeText={item => setInputData(item)}
        style={styles.input}
         />
         <View style={styles.input2}>
          <Button onPress={addElementToArray} 
          title={'บันทึก'}
           />
         </View>
        
          <ScrollView>
        {InputDATA2.map((item, index) => {
          return (
            <View key={index} >
              <Text>{item}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    flex: 1,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    width: "70%",
    marginVertical: 10,
  },
  input2: {
    width: "70%",
    marginVertical: 10,
  },
  outputtext: {
    fontSize: 20,
  },
  btncontainer: {
    backgroundColor: "#d0efff",
    width: "70%",
  },
  outputcontainer: {
    marginVertical: 10,
  },
});
export {Lab3_1}
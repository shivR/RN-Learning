import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const element1 = 'Hey Shiv'
  const element2 = [1,2,3,4,5]
  const jsx1 = <Text>Hey there!</Text>

  // return JSX element
  // Text is an element and style is props(properties)
  return <View>
    <Text style={styles.text}>Hi There!</Text>
    <Text>{element1}</Text>
    <Text>{element2}</Text>
    <Text>{element1}! we welcome you.</Text>
    {jsx1}
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

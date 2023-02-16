/// Create component

// 1: Import libraries
import React from "react";
import { Text, StyleSheet } from "react-native";

// 2: Create function that returns JSX (JSX is a dialect of javascript which tells react what to show)
const ComponentScreen = () => {
    return <Text style = {styles.textStyle}>Hey Shiv. This is the Component</Text>
}

// 3: Create style and apply
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

// Export the component
export default ComponentScreen
import React, {useState} from "react";      // useState is a hook
import { View, Text, Button, StyleSheet } from "react-native";

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)           // setCounter will be a function
    return <View>
        <Button title="Increase" onPress={() => {
            // Dont do this
            // counter++

            setCounter(counter + 1)
        }}/>
        <Button title="Decrease" onPress={() => {
            // counter--   //counter -= 1
            setCounter(counter - 1)
        }}/>
        <Text>Current Count: {counter}</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default CounterScreen;
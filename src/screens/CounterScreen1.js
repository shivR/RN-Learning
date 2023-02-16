import React, {useReducer} from "react";      // useState is a hook
import { View, Text, Button, StyleSheet } from "react-native";

const reducer = (state, action) => {
    return {...state, counter: state.counter + action.payload}
}
const CounterScreen1 = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0})
    return <View>
        <Button title="Increase" onPress={() => {
            dispatch({payload:1})
        }}/>
        <Button title="Decrease" onPress={() => {
            dispatch({payload:-1})
        }}/>
        <Text>Current Count: {state.counter}</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default CounterScreen1;
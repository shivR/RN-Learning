import React , {useReducer} from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorBox from "../component/ColorBox";

const COLOR_CONSTANT = 15

const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number}
    // action === {type: 'change_red', payload: 15}
    switch (action.type) {
        case 'change_red':
            if (state.red + action.payload < 0 || state.red + action.payload > 255) {
                return state
            }
            return {...state, red: state.red + action.payload}  //...state means original object of state, red: update amount will replace red from state
        case 'change_green':
            return state.green + action.payload < 0 || state.green + action.payload > 255 ? state : {...state, green: state.green + action.payload}            
        case 'change_blue':
            return state.blue + action.payload < 0 || state.blue + action.payload > 255 ? state : {...state, blue: state.blue + action.payload}            
        default:
            return state
    }
}

const SquareScreen1 = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    const {red, green, blue} = state

    return <View>
        <ColorBox 
        color = "Red" 
        onIncrease = {() => dispatch({type: "change_red", payload:COLOR_CONSTANT})}
        onDecrease = {() => dispatch({type: "change_red", payload:-1*COLOR_CONSTANT})}
        />
        <ColorBox 
        color = "Green" 
        onIncrease = {() => dispatch({type: "change_green", payload:COLOR_CONSTANT})}
        onDecrease = {() => dispatch({type: "change_green", payload:-1*COLOR_CONSTANT})}
        />
        <ColorBox 
        color = "Blue" 
        onIncrease = {() => dispatch({type: "change_blue", payload:COLOR_CONSTANT})}
        onDecrease = {() => dispatch({type: "change_blue", payload:-1*COLOR_CONSTANT})}
        />        
        <View 
        style={{width: 150, height: 150, backgroundColor: `rgb(${red},${green},${blue})`}} 
        />
    </View>
}

const styles = StyleSheet.create({})

export default SquareScreen1;
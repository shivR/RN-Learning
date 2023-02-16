import React , {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorBox from "../component/ColorBox";

const COLOR_CONSTANT = 15

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const changeColorValue = (color, changeBy) => {
        switch (color) {
            case "red":
                red+changeBy < 0 || red+changeBy > 255 ? null : setRed(red+changeBy)
                return
            case "green":
                green+changeBy < 0 || green+changeBy > 255 ? null : setGreen(green+changeBy)
                return
            case "blue":
                blue+changeBy < 0 || blue+changeBy > 255 ? null : setBlue(blue+changeBy)
                return
            default:
                return
        }
    }
    
    return <View>
        <ColorBox 
        color = "Red" 
        onIncrease = {() => changeColorValue("red" , COLOR_CONSTANT)}
        onDecrease = {() => changeColorValue("red" , 1 * COLOR_CONSTANT)}
        />
        <ColorBox 
        color = "Green" 
        onIncrease = {() => changeColorValue("green" , COLOR_CONSTANT)}
        onDecrease = {() => changeColorValue("green" , 1 * COLOR_CONSTANT)}
        />
        <ColorBox 
        color = "Blue" 
        onIncrease = {() => changeColorValue("blue" , COLOR_CONSTANT)}
        onDecrease = {() => changeColorValue("blue" , 1 * COLOR_CONSTANT)}
        />        
        <View 
        style={{width: 150, height: 150, backgroundColor: `rgb(${red},${green},${blue})`}} 
        />
    </View>
}

const styles = StyleSheet.create({})

export default SquareScreen;
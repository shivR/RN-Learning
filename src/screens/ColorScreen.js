import React, {useState} from "react";
import { View, FlatList, Button, StyleSheet } from "react-native";

const ColorScreen = () => {
    const [colors, setColors] = useState([])
    
    return <View>
        <Button title="Add Color" onPress={() => {
            setColors([...colors, randomRGB()])         // copies all element of colors + new color
        }}/>
        
        <FlatList data={colors} renderItem={(color) => {
            return <View style = { {width: 100, height: 100, backgroundColor: color.item} } />            
        }} />
    </View>
}

const randomRGB = () => {
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)

    return `rgb(${red}, ${green}, ${blue})`
}
const styles = StyleSheet.create({

})

export default ColorScreen;
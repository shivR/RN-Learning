import React from "react";
import { View, StyleSheet } from "react-native";

const LayoutScreen1 = () => {
    return <View style= {styles.viewStyle}>
        <View style={styles.box1Style}></View>
        <View style={styles.box2Style}></View>
        <View style={styles.box3Style}></View>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth:5,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height:200
    },    
    box1Style: {        
        backgroundColor: 'purple',
        width: 100,
        height: 100
    },
    box2Style: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
        alignSelf: 'flex-end'
    },
    box3Style: {
        backgroundColor: 'orange',
        width: 100,
        height: 100
    }
})

export default LayoutScreen1;
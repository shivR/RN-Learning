import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LayoutScreen = () => {
    return <View style= {styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child 1</Text>
        <Text style={styles.textTwoStyle}>Child 2</Text>
        <Text style={styles.textThreeStyle}>Child 3</Text>
        <Text style={styles.textFourStyle}>Child 4</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 5,
        borderWidth:5,
        borderColor: 'black',
        alignItems: 'center',
        flexDirection: 'row',
        height:400,
        justifyContent: 'space-between'
    },    
    textStyle: {
        padding: 5,
        borderWidth: 1,
        borderColor: 'red',
        margin: 2        
    },
    textOneStyle: {
        padding: 5,
        borderWidth: 1,
        borderColor: 'red',
        margin: 2,
        flex:4     
    },
    textTwoStyle: {
        padding: 5,
        borderWidth: 1,
        borderColor: 'red',
        flex:2,
        alignSelf: 'stretch',        //override parent alignItems        
        right: 5        //overlap on other child
    },
    textThreeStyle: {
        padding: 5,
        borderWidth: 1,
        borderColor: 'red',
        position: 'absolute',   // to ignore parent, al;so set edges to 0 to fill in super view
        top: 0,
        left: 0,
        bottom: 0,
        right:0                
    },
    textFourStyle: {
        padding: 5,
        borderWidth: 1,
        borderColor: 'red',
        left:10,
        ...StyleSheet.absoluteFillObject
    }
})

export default LayoutScreen;


/*
        position: 'absolute',   // to ignore parent, al;so set edges to 0 to fill in super view
        top: 0,
        left: 0,
        bottom: 0,
        right:0                

        same as
        ...StyleSheet.absoluteFillObject

        ... to copy the existing style with above one
*/
import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const FlatListScreen = () => {
    const friends = [
        {name: "friend 1", age: 10},
        {name: "friend 2", age: 20},
        {name: "friend 3", age: 30},
        {name: "friend 4", age: 40},
        {name: "friend 5", age: 50},
        {name: "friend 6", age: 60},
        {name: "friend 7", age: 70},
        {name: "friend 8", age: 80},
        {name: "friend 9", age: 90},
    ]
    return (
        <FlatList 
            //horizontal = {true}
            horizontal = {false}
            showsHorizontalScrollIndicator = {false}
            data={friends} 
            renderItem={
                (data) => {            
                    // data.name & data.index        
                    return <Text style = {styles.textStyle}>{data.item.name} - Age {data.item.age}</Text>
                }
            }
        >
        </FlatList>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20        
    }
})


export default FlatListScreen;
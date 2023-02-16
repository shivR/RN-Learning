import react from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const Dashboard = ({navigation}) => {
    //console.log(props)
    return <View>
        <Text>Welcome</Text>
        <Button title="Color Screen" onPress={() => {
            navigation.navigate('Color')
        }}/>
        <Button title="Counter Screen" onPress={() => {
            navigation.navigate('Counter')
        }}/>
        <Button title="Counter Screen1" onPress={() => {
            navigation.navigate('Counter1')
        }}/>

        <Button title="Goto Components" onPress={() => {
            navigation.navigate('Component')
        }}/>
        <TouchableOpacity onPress={() => {
            navigation.navigate('FlatList')
        }}>
            <Text> Goto List </Text>
        </TouchableOpacity>
        <Button title="Goto ImageList" onPress={() => {
            navigation.navigate('ImageScreen')
        }}/>
        <Button title="Goto SquareScreen" onPress={() => {
            navigation.navigate('Square')
        }}/>
        <Button title="Goto SquareScreen1" onPress={() => {
            navigation.navigate('Square1')
        }}/>
        <Button title="Goto Text Screen" onPress={() => {
            navigation.navigate('Text')
        }}/>
        <Button title="Goto Layout Screen" onPress={() => {
            navigation.navigate('Layout')
        }}/>
        <Button title="Goto Layout Screen1" onPress={() => {
            navigation.navigate('Layout1')
        }}/>
    </View>
}

export default Dashboard;



/// Props destuction in ES16 JS
// const Dashboard = (props) => {
//     props.navigation
// }

// const Dashboard = ({navigation}) => {
//     navigation
// }
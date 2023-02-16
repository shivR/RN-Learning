import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextScreen = () => {
    const [password, setPassword] = useState('')

    return <View>
        <Text>Enter Password:</Text>
        <TextInput 
        style={styles.textfieldStyle} 
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry = {true}
        value = {password}
        onChangeText = {(newValue)=>setPassword(newValue)}
        />
        {
            (password.length < 5) ? <Text>Please enter password with 5 digits atleast.</Text> : null
        }
    </View>
}

const styles = StyleSheet.create({
    textfieldStyle: {
        margin: 10,
        borderWidth: 2,
        borderColor: 'black'
    }
})

export default TextScreen;
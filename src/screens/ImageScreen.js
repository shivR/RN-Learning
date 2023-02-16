import react from "react";
import { View, StyleSheet } from "react-native";
import ImageDetail from "../component/ImageDetail";

const ImageScreen = () => {
    return <View>
        <ImageDetail title="Forest" 
                    imageSource={require('../../assets/forest.jpg')} 
                    score={8}
                    />
        <ImageDetail title="Beach" 
                    imageSource={require('../../assets/beach.jpg')}
                    score={5}
                    />
        <ImageDetail title = "Mountain" 
                    imageSource={require('../../assets/mountain.jpg')}
                    score={7}
                    />
    </View>
}

const styles = StyleSheet.create( {

})

export default ImageScreen;
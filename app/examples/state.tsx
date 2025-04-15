import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native"
import { useState } from "react";
import { Button } from "react-native";

export default function StateScreen() {
    const [counter, setCounter] = useState(0);
    const [image, setImage] = useState(require("@/assets/images/sironglin.png"));

    const incrementCounter = () => {
        if(counter >= 15) {
            changeImage();
        }
        setCounter(previousCounter => previousCounter + 1);
    };

    const changeImage = () => {
        setImage(require("@/assets/images/sironglinghibli.png"));
    }
    return(
        <View style={styles.container}>
            <Image source={image} style={styles.imgSize}/>
            <Text style={styles.countText}>{counter}</Text>
            <TouchableOpacity style={styles.button} onPress={incrementCounter}> 
                <Text style={styles.buttonText}>Push Me</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#90EE90',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    countText: {
      fontSize: 80,
      fontWeight: 'bold',
      color: '#000000',
      textAlign: "center"
    },
    button: {
      backgroundColor: '#4169E9',
      borderRadius: 8,
      paddingVertical: 15,
      paddingHorizontal: 15,
      marginVertical: 10,
      width: 250,
    },
    buttonText: {
        color: "#000000",
        textAlign: "center",
        fontSize: 25
    },
    imgSize: {
        width:200,
        height:300,
    }
  });


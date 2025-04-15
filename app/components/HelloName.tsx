import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
 // based on: https://reactnative.dev/docs/props?language=typescript
type Props = {
  name: string;
};

const GreetingName = (person: Props) => {
    return(
        <TouchableOpacity>
            <Text style={styles.textSize}>Hello, {person.name}</Text>  
        </TouchableOpacity>
              
    );
};

export default function HelloName() {
    return(
        <View style={styles.container}>
            <GreetingName name="Rohan Mallu"/>
            <GreetingName name="Corkey the Pirate"/>
            <GreetingName name="Dr. Sirong Lin"/>
            <GreetingName name="Ebenezer Scrooge"/>
            <GreetingName name="John Sebastian Davis"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    textSize: {
        fontSize: 35,
        backgroundColor: "#FFFFFF",
        textAlign: "center",
        padding: 10,
        marginBottom: 10
    },

});
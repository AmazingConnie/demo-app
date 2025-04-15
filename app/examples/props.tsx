import { Text, View, StyleSheet } from "react-native"
import HelloName from "../components/HelloName";

export default function PropsScreen() {
    return(
        <View style={styles.container}>
            <HelloName/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#91AE27',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
});

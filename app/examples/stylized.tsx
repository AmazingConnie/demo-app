import { Text, View, StyleSheet} from "react-native"
import MyClubsStylized from "../components/MyClubsStylized";

export default function StylizedScreen() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>My Clubs</Text>
            <MyClubsStylized/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF6EC7',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 20,
      },
    }
);

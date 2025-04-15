import { Text, View, StyleSheet } from "react-native";
import { Avatar } from "@rneui/base";
import ContactList from "../components/ContactList";

export default function CommunityScreen() {
    const localImage = require('@/assets/images/ukportraits/kemibadenoch.jpg');
    return(
        <View style={styles.container}>
            <View style={styles.centerText}>
                <Avatar size={90} rounded source={localImage} />
                <Text style={styles.name}>Kemi Badenoch</Text>
                <Text style={styles.position}>Leader of the Opposition</Text>
                <Text style={styles.position}>(2024-present)</Text>                 
            </View>

            <ContactList/>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    centerText: {
        alignItems: "center",
        marginTop: 15
    },
    name: {
        fontSize: 25
    },
    position: {
        fontSize: 15,
        color: "#363636"
    },

});
// Adapted from: https://reactnativeelements.com/docs/components/card
// Adapted from: https://reactnativeelements.com/docs/components/avatar

import { Text, View, StyleSheet, Image } from "react-native";
import {Card } from '@rneui/themed';

const contacts = [
    {id: 1, name: "David Cameron", image: require("@/assets/images/ukportraits/davidcameron.jpg")}, 
    {id: 2, name: "Theresa May", image: require("@/assets/images/ukportraits/theresamay.jpg")}, 
    {id: 3, name: "Boris Johnson", image: require("@/assets/images/ukportraits/borisjohnson.jpg")}, 
    {id: 4, name: "Liz Truss", image: require("@/assets/images/ukportraits/liztruss.jpg")}, 
    {id: 5, name: "Rishi Sunak", image: require("@/assets/images/ukportraits/rishisunak.jpg")}];

export default function ContactList() {
    return(
        <View>
            <Card>
                <Card.Title >TORY LEADERS OF THE UNITED KINGDOM (2010-2024)</Card.Title>
                <Card.Divider/>
                {contacts.map((user, id) => (
                    <View key={id} style={styles.user}>
                        <Image style={styles.image} resizeMode="cover" source={user.image}/>
                        <Text style={styles.name}>{user.name}</Text>
                    </View>
                ))}
            </Card>
            </View>
    );
}

const styles = StyleSheet.create({
    user: {
        flexDirection: "row",
        marginBottom: 20,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    name: {
        fontSize: 20,
        marginTop: 10,
    }
});
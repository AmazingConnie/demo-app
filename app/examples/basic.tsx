import { Text, View } from "react-native";
import MyClubs from "../components/MyClubs";

export default function BasicScreen() {
    return(
        <View>
            <Text>My Clubs</Text>
            <MyClubs/>
        </View>
    );
}
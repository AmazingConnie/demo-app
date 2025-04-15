import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { useRouter } from "expo-router";

type Props = {
  id: number;
  name: string;
  route: string;
};
const menu = [{id: 1, name: "Basic Components", route: "/examples/basic"}, {id: 2, name: "Stylized Components", route: "/examples/stylized"}, 
{id: 3, name: "Props", route: "/examples/props"}, {id: 4, name: "State", route: "/examples/state"}, {id: 5, name: "Community Components", route: "/examples/community"}];

export default function ButtonList() {
    const router = useRouter();
    const handleExamplePress = (item: Props) => {
      if(item.id === 1) {
        router.push("/examples/basic");
      } else if(item.id === 2) {
        router.push("/examples/stylized");
      } 
      else if(item.id === 3) {
        router.push("/examples/props");
      }
      else if(item.id === 4) {
        router.push("/examples/state");
      }
      else if(item.id === 5) {
        router.push("/examples/community");
      } else {
        alert("Dinner's Ready!");
      }
    }
    
    return(
    <FlatList data={menu} renderItem={({item}) => (
        <TouchableOpacity key={item.id} style={styles.button} onPress={() => handleExamplePress(item)}>
            <Text style={styles.buttonText}>{item.name}</Text>
        </TouchableOpacity>
     ) }/>
       
        
        
    );
    
}

const styles = StyleSheet.create({
      button: {
        backgroundColor: '#4169E1',
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginVertical: 10,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        
      },
      buttonText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
      },
});
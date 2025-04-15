import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";

const clubs = 
[{id: 1, name: 'Association for Computing Machinery at UMass Lowell'}, 
    {id: 2, name: 'UML Cloud Computing Club'}, 
    {id: 3, name: 'Japanese Student Association'},
    {id: 4, name: 'National Society of Black Engineers'},
    {id: 5, name: 'Chess Club'},
    {id: 6, name: 'Marketing Society'},
    {id: 7, name: 'South Asian Student Association'},
    {id: 8, name: 'Criminal Justice Society'},
    {id: 9, name: 'Omega Chi Epsilon'},
    {id: 10, name: 'Public Health Club'},
    {id: 11, name: 'Christian Student Fellowship'},
    {id: 12, name: 'Rock and Metal Club'},
    {id: 13, name: 'UML Cybersecurity Club'},
    {id: 14, name: 'Arts and Crafts Club'},
    {id: 15, name: 'Anime Club at UMass Lowell'}];
    
export default function MyClubs() {
    return(
        <FlatList data={clubs} renderItem={({item}) => (
                <TouchableOpacity key={item.id} onPress={() => alert(item.name)}>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
             ) }/>
    );
}
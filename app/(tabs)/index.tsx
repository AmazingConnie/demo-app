import { Text, View, StyleSheet } from "react-native";
import ButtonList from "../components/ButtonList";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Components</Text>
      <ButtonList/>
    </View>
  );
}



/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
});
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89CFF0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
});
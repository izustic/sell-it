import { StatusBar } from "expo-status-bar";
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableNativeFeedback,
	View,
  Button
} from "react-native";

export default function App() {
	let x = 1;
	console.log("App executed");
	return (
		<SafeAreaView style={styles.container}>
      <Button 
      color="orange"
      title="Click Me" onPress={()=> console.log("Button tapped")}/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

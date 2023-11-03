import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
	return (
		<GestureHandlerRootView>
			<MessagesScreen />
		</GestureHandlerRootView>
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

import { StatusBar } from "expo-status-bar";
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableNativeFeedback,
	View,
  Button,
  Dimensions
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

export default function App() {
	return <ViewImageScreen />
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

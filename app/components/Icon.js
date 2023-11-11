import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

export default function Icon({ name, backgroundColor, size, backgroundSize }) {
	return (
		<View style={[styles.iconContainer, { backgroundColor: backgroundColor, width: backgroundSize, height: backgroundSize }]}>
			<MaterialCommunityIcons name={name} size={size} color={colors.white} />
		</View>
	);
}

const styles = StyleSheet.create({
	iconContainer: {
		// marginRight: 10,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50
	},
});

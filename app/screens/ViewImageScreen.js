import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";

function ViewImageScreen(props) {
	return (
		<View style={styles.container}>
			<View style={styles.closeIcon}>
				<MaterialIcons name="close" size={30} color={colors.white} />
			</View>
			<View style={styles.deleteIcon}>
				<MaterialIcons name="delete" size={30} color={colors.white} />
			</View>
			<Image
				resizeMode="contain"
				style={styles.image}
				source={{ uri: "https://images.unsplash.com/photo-1613061527119-56ad37b8a581?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	closeIcon: {
		position: "absolute",
		top: 40,
		left: 20,
	},
	container: {
		backgroundColor: colors.black,
		flex: 1,
	},
	deleteIcon: {
		position: "absolute",
		top: 40,
		right: 20,
	},
	image: {
		width: "100%",
		height: "100%",
	},
});
export default ViewImageScreen;

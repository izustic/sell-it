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
				source={{ uri: "https://source.unsplash.com/random/?basket" }}
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

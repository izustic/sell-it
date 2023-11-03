import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, bgCol }) {
	return (
		<TouchableOpacity style={[styles.button, {backgroundColor: colors[bgCol]}]} onPress={onPress}>
				<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
    marginVertical: 10,
		width: "100%",
	},
	text: {
		color: colors.white,
		fontSize: 18,
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});
export default AppButton;

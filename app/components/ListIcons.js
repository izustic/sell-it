import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";

export default function ListIcons({
	details,
	color,
  name,
	onPress,
	renderRightActions,
}) {
	return (
		<Swipable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={styles.container}>
					<View style={[styles.iconContainer, {backgroundColor: color}]}>
						<MaterialCommunityIcons
							name={name}
							size={24}
							color={colors.white}
						/>
					</View>
					<View style={styles.listingDetails}>
						<Text style={styles.details}>{details}</Text>
					</View>
				</View>
			</TouchableHighlight>
		</Swipable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 15,
	},
	iconContainer: {
		width: 40,
		height: 40,
		borderRadius: 50,
		marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
	},
	listingDetails: {
		flexDirection: "column",
		justifyContent: "center",
	},
	details: {
		fontWeight: "600",
	},
});

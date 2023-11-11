import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";
import Icon from './Icon';

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
					<Icon 
						name={name}
						backgroundColor={color}
						size={24}
						backgroundSize={40}
					/>
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
    alignItems: "center",
	},
	listingDetails: {
		flexDirection: "column",
		justifyContent: "center",
		marginLeft: 10
	},
	details: {
		fontWeight: "600",
	},
});

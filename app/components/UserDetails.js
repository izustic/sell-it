import React from "react";
import {
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from "react-native";
import Swipable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";

export default function UserDetails({
	name,
	email,
	image,
	onPress,
	renderRightActions,
}) {
	return (
		<Swipable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={styles.container}>
					<Image style={styles.image} source={image} />
					<View style={styles.listingDetails}>
						<Text style={styles.name}>{name}</Text>
						<Text style={styles.email}>{email}</Text>
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
	image: {
		width: 60,
		height: 60,
		borderRadius: 50,
		marginRight: 10,
	},
	listingDetails: {
		flexDirection: "column",
		justifyContent: "center",
	},
	email: {
		color: colors.medium,
	},
	name: {
		fontWeight: "600",
	},
});

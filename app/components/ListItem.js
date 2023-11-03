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

export default function ListItem({
	title,
	subTitle,
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
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.subTitle}>{subTitle}</Text>
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
	subTitle: {
		color: colors.medium,
	},
	title: {
		fontWeight: "600",
	},
});

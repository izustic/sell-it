import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import Swipable from "react-native-gesture-handler/Swipeable";

import colors from "../../config/colors";
import AppText from "../AppText";

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
						<AppText style={styles.title} numberOfLines={1}>
							{title}
						</AppText>
						{subTitle && (
							<AppText style={styles.subTitle} numberOfLines={2}>
								{subTitle}
							</AppText>
						)}
					</View>
					<MaterialCommunityIcons
						name="chevron-right"
						size={25}
						color={colors.medium}
					/>
				</View>
			</TouchableHighlight>
		</Swipable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 15,
		alignItems: "center",
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
		flex: 1,
	},
	subTitle: {
		color: colors.medium,
	},
	title: {
		fontWeight: "600",
	},
});

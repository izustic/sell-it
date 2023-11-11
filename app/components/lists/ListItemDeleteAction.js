import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import colors from "../../config/colors";

export default function ListItemDeleteAction({ onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="trash-can-outline"
					size={30}
					color={colors.white}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.danger,
		width: 70,
		justifyContent: "center",
		alignItems: "center",
	},
});

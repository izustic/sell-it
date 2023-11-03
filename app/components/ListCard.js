import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

export default function ListCard({title, price, image}) {
	return (
		<View style={styles.cardContainer}>
			<Image
				style={styles.image}
				source={image}
			/>
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.price}>${price}</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
    marginBottom: 15
  },
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: "100%",
		height: 200,
	},
	price: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 15,
		marginVertical: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: "500",
    fontWeight: "bold"
	},
  userContainer: {
    marginTop: 20
  }
});

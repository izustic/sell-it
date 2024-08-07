import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function ListingDetailsScreen() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<View>
				<Image
					style={styles.image}
					source={{ uri: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
				/>
				<View style={styles.detailsContainer}>
					<AppText style={styles.title}>Red jacket for sale</AppText>
					<AppText style={styles.price}>$100</AppText>
					<View style={styles.userContainer}>
						<ListItem
							image={{
								uri: "https://lh3.googleusercontent.com/pw/ADCreHc7ekTenEyOI6Kseo9iYoGNMb_d3v6dEiI0pb-0uDRohqx-IhFDdZyMCZ3SfIvhLcr7x9MnpKnmJ8eWJmeVKvWGj0DS15JClj7QEEU4nSOlo7dP2NRBrqSWyuqbHjP71iCVwaQdsqzq4z7WRnxhCyc8=w714-h714-s-no-gm?authuser=0?.jpg",
							}}
							title="Izu Obi"
							subTitle="5 Listings"
						/>
					</View>
				</View>
			</View>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: "100%",
		height: 300,
	},
	price: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 20,
		marginVertical: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
	},
	userContainer: {
		marginTop: 20,
	},
});

import Constants from "expo-constants";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListIcons from "../components/ListIcons";
import ListItemSeperator from "../components/ListItemSeperator";
import UserDetails from "../components/UserDetails";
import colors from "../config/colors";

export default function MyAccountScreen() {
	const icons = [
		{
			id: 1,
			name: "format-list-bulleted",
			color: colors.danger,
			details: "My Listings",
		},
		{
			id: 2,
			name: "email",
			color: colors.cyan,
			details: "My Messages",
		},
	];
	return (
		<View style={styles.accountScreen}>
			<View style={styles.userContainer}>
				<UserDetails
					image={{
						uri: "https://lh3.googleusercontent.com/pw/ADCreHc7ekTenEyOI6Kseo9iYoGNMb_d3v6dEiI0pb-0uDRohqx-IhFDdZyMCZ3SfIvhLcr7x9MnpKnmJ8eWJmeVKvWGj0DS15JClj7QEEU4nSOlo7dP2NRBrqSWyuqbHjP71iCVwaQdsqzq4z7WRnxhCyc8=w714-h714-s-no-gm?authuser=0?.jpg",
					}}
					name="Izu Obi"
					email="izustix@gmail.com"
				/>
			</View>
			<View>
				<FlatList
					style={styles.userContainer}
					data={icons}
					keyExtractor={(icon) => icon.id.toString()}
					renderItem={({ item }) => (
						<ListIcons
							name={item.name}
							color={item.color}
							details={item.details}
						/>
					)}
					ItemSeparatorComponent={ListItemSeperator}
				/>
			</View>

			<View style={styles.logoutContainer}>
				<ListIcons name="logout" color={colors.info} details="Log Out" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	accountScreen: {
		height: "100%",
		backgroundColor: colors.light,
	},
	userContainer: {
		marginTop: Constants.statusBarHeight,
		backgroundColor: colors.white,
	},
	logoutContainer: {
		marginTop: 20,
		backgroundColor: colors.white,
	},
});

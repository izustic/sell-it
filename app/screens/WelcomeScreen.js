import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

function WelcomeScreen(props) {
	return (
		<ImageBackground
			style={styles.background}
			source={{ uri: "https://source.unsplash.com/random/?minimalist" }}
		>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={require("../assets/sellit-green.png")}
				/>
				<Text> Sell What You Don't Need</Text>
			</View>
			<View style={styles.loginButton}></View>
			<View style={styles.registerButton}></View>
		</ImageBackground>
	);
}
const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	loginButton: {
		width: "100%",
		height: 70,
		backgroundColor: colors.primary,
	},
	logo: {
		width: 60,
		height: 100,
		objectFit: "cover",
	},
	logoContainer: {
		position: "absolute",
		top: 70,
		alignItems: "center",
	},
	registerButton: {
		width: "100%",
		height: 70,
		backgroundColor: colors.secondary,
	},
});

export default WelcomeScreen;

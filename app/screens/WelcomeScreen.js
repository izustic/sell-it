import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
	return (
		<ImageBackground
			blurRadius={10}
			style={styles.background}
			source={{ uri: "https://source.unsplash.com/random/?minimalist" }}
		>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={require("../assets/sellit-green.png")}
				/>
				<Text style={styles.tagline}> Sell What You Don't Need</Text>
			</View>
			<View style={styles.buttonContainer}>
				<AppButton title="Login" onPress={() => console.log("tapped")} bgCol="primary" />
				<AppButton title="Register" onPress={() => console.log("tapped")} bgCol="secondary"/>
				
			</View>
		</ImageBackground>
	);
}
const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
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
	buttonContainer: {
		width: "100%",
		padding: 20
	},
	tagline: {
		fontSize: 25,
		fontWeight: "600",
		paddingVertical: 20
	}
});

export default WelcomeScreen;

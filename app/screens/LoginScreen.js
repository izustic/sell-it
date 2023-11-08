import { Formik } from "formik";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

export default function LoginScreen() {
	return (
		<Screen>
			<View style={styles.container}>
				<Image
					resizeMode="contain"
					style={styles.logo}
					source={require("../assets/sellit-green.png")}
				/>

				<Formik
					initialValues={{ email: "", password: "" }}
					onSubmit={(values) => console.log(values)}
				>
					{({ handleChange, handleSubmit }) => (
						<>
							<AppTextInput
								autoCapitalize="none"
								autoCorrect={false}
								icon="email"
								placeholder="Email Address"
								onChangeText={handleChange("email")}
								keyboardType="email-address"
								textContentType="emailAddress"
							/>
							<AppTextInput
								autoCapitalize="none"
								secureTextEntry
								icon="lock"
								placeholder="Password"
								textContentType="password"
								onChangeText={handleChange("password")}
							/>
							<AppButton
								title="Login"
								onPress={handleSubmit}
								bgCol="secondary"
							/>
						</>
					)}
				</Formik>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	logo: {
		height: 80,
		width: 80,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 20,
	},
});

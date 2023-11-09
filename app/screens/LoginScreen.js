import { Formik } from "formik";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

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
					validationSchema={validationSchema}
				>
					{({ handleChange, handleSubmit, errors }) => (
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
							{errors.email && (
								<AppText style={{ color: "red" }}>{errors.email}</AppText>
							)}
							<AppTextInput
								autoCapitalize="none"
								autoCorrect={false}
								secureTextEntry
								icon="lock"
								placeholder="Password"
								textContentType="password"
								onChangeText={handleChange("password")}
							/>
							{errors.password && (
								<AppText style={{ color: "red" }}>{errors.password}</AppText>
							)}
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

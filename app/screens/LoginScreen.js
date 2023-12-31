import React from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from '../components/forms'

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

				<AppForm
					initialValues={{ email: "", password: "" }}
					onSubmit={(values) => console.log(values)}
					validationSchema={validationSchema}
				>
					<AppFormField
						name="email"
						autoCapitalize="none"
						autoCorrect={false}
						icon="email"
						placeholder="Email Address"
						keyboardType="email-address"
						textContentType="emailAddress"
					/>
					<AppFormField
						name="password"
						autoCapitalize="none"
						autoCorrect={false}
						secureTextEntry
						icon="lock"
						placeholder="Password"
						textContentType="password"
					/>
					<SubmitButton title="Login" bgCol="secondary" />
				</AppForm>
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

import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton, AppFormPicker } from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1, "Price must be at least 1").max(10000, "Price must not exceed 10,000").label("Price"),
  description: Yup.string().max(300).label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Food", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
  { label: "Furniture", value: 4 },
]

export default function ListingEditScreen() {
	return (
		<Screen>
			<View style={styles.container}>
				<AppForm
					initialValues={{ title: "", price: "", category: null, description: "" }}
					onSubmit={(values) => console.log(values)}
					validationSchema={validationSchema}
				>
					<AppFormField
						name="title"
            maxLength={255}
						placeholder="Title"
					/>
					<AppFormField
						name="price"
            maxLength={8}
						placeholder="Price"
            keyboardType="numeric"
					/>
					<AppFormPicker
						name="category"
						placeholder="Category"
            items={categories}
					/>
					<AppFormField
						name="description"
						autoCorrect
						placeholder="Description"
            multiline
            maxLength={255}
					/>
					<SubmitButton title="post" bgCol="secondary" />
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

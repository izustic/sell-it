import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton, AppFormPicker } from "../components/forms";
import CategoryPickerItem from '../components/CategoryPickerItem';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1, "Price must be at least 1").max(10000, "Price must not exceed 10,000").label("Price"),
  description: Yup.string().max(300).label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Food", value: 1, icon: "food", backgroundColor: "red" },
  { label: "Clothing", value: 2, icon: "hanger", backgroundColor: "green" },
  { label: "Camera", value: 3, icon: "camera", backgroundColor: "blue" },
  { label: "Vehicles", value: 4, icon: "car", backgroundColor: "brown" },
	{ label: "Electronics", value: 5, icon: "laptop", backgroundColor: "#58D68D" },
  { label: "Sports", value: 6, icon: "tennis-ball", backgroundColor: "#FFC300" },
  { label: "Homes", value: 7, icon: "camera", backgroundColor: "#581845" },
  { label: "Books", value: 8, icon: "book", backgroundColor: "purple" },
  { label: "Pets", value: 9, icon: "dog-side", backgroundColor: "gray" },
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
						PickerItemComponent={CategoryPickerItem}
            items={categories}
						numberOfColumns={3}
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

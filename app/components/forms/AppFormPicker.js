import { useFormikContext } from "formik";
import React from "react";
import { Text } from 'react-native'

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({ name, items, placeholder}) {
	const { setFieldValue, values, errors, touched } = useFormikContext();

	return (
		<>
			<AppPicker
				items={items}
				onSelectItem={(item) => setFieldValue(name, item)}
				placeholder={placeholder}
				selectedItem={values[name]}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}


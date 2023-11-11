import { useFormikContext } from "formik";
import React from "react";
import { Text } from 'react-native'

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({ name, items, PickerItemComponent, numberOfColumns, placeholder}) {
	const { setFieldValue, values, errors, touched } = useFormikContext();

	return (
		<>
			<AppPicker
				items={items}
				numberOfColumns={numberOfColumns}
				onSelectItem={(item) => setFieldValue(name, item)}
				PickerItemComponent={PickerItemComponent}
				placeholder={placeholder}
				selectedItem={values[name]}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}


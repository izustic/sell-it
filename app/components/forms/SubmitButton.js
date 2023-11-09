import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";

import AppButton from "../AppButton";

export default function SubmitButton({ title, bgCol }) {
	const { handleSubmit } = useFormikContext();
	return <AppButton title={title} onPress={handleSubmit} bgCol={bgCol} />;
}

const styles = StyleSheet.create({});

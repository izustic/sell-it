import React, { useState } from "react";
import { StyleSheet, Switch } from "react-native";
import colors from "../config/colors";

import Screen from "./Screen";

export default function AppSwitch() {
	const [isNew, setIsNew] = useState(false);
	return (
		<Screen>
			<Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} style={styles.switchContainer}/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	switchContainer: {
		width: "100%",
		height: 70,
		backgroundColor: colors.medium,
	}
});

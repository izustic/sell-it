import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
	text: {
		color: colors.dark,
		fontSize: 18,
		fontFamily: Platform.OS === "android" ? "sans-serif" : "System",
		// flex: 1,
		// backgroundColor: "red",
		width: "100%"
	},
};

import { StyleSheet, View } from "react-native";
import Icon from './Icon';
import colors from "../config/colors";
import AppText from './AppText';

export default function CategoryPickerItem({ item, onPress }) {
	return (
		<View style={styles.container}>
			<Icon backgroundColor={item.backgroundColor} name={item.icon} size={30} backgroundSize={50}/>
      <AppText style={styles.label}>{item.label}</AppText>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    alignItems: "center",
    margin: 10,
    width: "28%",
  },
  label: {
    marginTop: 5,
    textAlign: "center"
  }
});

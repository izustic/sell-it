import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screen from "../components/Screen";
import ListCard from "../components/lists/ListCard";
import colors from "../config/colors";

const cards = [
	{
		id: 1,
		title: "Red jacket for sale",
		price: 100,
		image: {
			uri: "https://source.unsplash.com/random/?red_jacket",
		},
	},
	{
		id: 2,
		title: "Couch in great condition",
		price: 1000,
		image: {
			uri: "https://source.unsplash.com/random/?sofa",
		},
	},
];

export default function ListingsScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<GestureHandlerRootView>
				<Screen>
					<FlatList
						data={cards}
						keyExtractor={(card) => card.id.toString()}
						renderItem={({ item }) => (
							<ListCard
								title={item.title}
								price={item.price}
								image={item.image}
								onPress={() => console.log("message selected", item)}
							/>
						)}
					/>
				</Screen>
			</GestureHandlerRootView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.light,
		padding: 15,
		flex: 1,
	},
});

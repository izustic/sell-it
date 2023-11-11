import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeperator from "../components/lists/ListItemSeperator";

const initialMessages = [
	{
		id: 1,
		title: "Jimmy Shoes",
		description:
			"A couple of nice pure Italian leather Jimmy shoes. Completely ergonomic and with threaded sole for that firm grip",
		image: {
			uri: "https://source.unsplash.com/random/?shoes",
		},
	},
	{
		id: 2,
		title: "Smart Glasses",
		description:
			"A pair of spectacles, Harry Potter inspired. With smart view integration. Has all functionalities of a smart phone. Just super cool",
		image: {
			uri: "https://source.unsplash.com/random/?glasses",
		},
	},
];

export default function MessagesScreen() {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);
	const handleDelete = (message) => {
		setMessages(messages.filter((m) => m.id !== message.id));
	};
	return (
		<GestureHandlerRootView>
			<Screen>
				<FlatList
					data={messages}
					keyExtractor={(message) => message.id.toString()}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							subTitle={item.description}
							image={item.image}
							onPress={() => console.log("message selected", item)}
							renderRightActions={() => (
								<ListItemDeleteAction onPress={() => handleDelete(item)} />
							)}
						/>
					)}
					ItemSeparatorComponent={ListItemSeperator}
					refreshing={refreshing}
					onRefresh={() => {
						setMessages([
							{
								id: 1,
								title: "Jimmy Shoes",
								description:
									"A couple of nice pure Italian leather Jimmy shoes. Completely ergonomic and with threaded sole for that firm grip",
								image: {
									uri: "https://source.unsplash.com/random/?shoes",
								},
							},
						]);
					}}
				/>
			</Screen>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({});

import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const initialMessages = [
	{
		id: 1,
		title: "Jimmy Shoes",
		description: "A couple of nice pure Italian leather Jimmy shoes. Completely ergonomic and with threaded sole for that firm grip",
		image: {
			uri: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	},
	{
		id: 2,
		title: "Smart Glasses",
		description: "A pair of spectacles, Harry Potter inspired. With smart view integration. Has all functionalities of a smart phone. Just super cool",
		image: {
			uri: "https://images.unsplash.com/photo-1614715838608-dd527c46231d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
								description: "A couple of nice pure Italian leather Jimmy shoes. Completely ergonomic and with threaded sole for that firm grip",
								image: {
									uri: "https://images.unsplash.com/photo-1614715838608-dd527c46231d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

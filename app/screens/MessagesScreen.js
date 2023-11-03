import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";

const initialMessages = [
	{
		id: 1,
		title: "T1",
		description: "D1",
		image: {
			uri: "https://source.unsplash.com/random/?jacket",
		},
	},
	{
		id: 2,
		title: "T2",
		description: "D2",
		image: {
			uri: "https://source.unsplash.com/random/?jacket",
		},
	},
];

export default function MessagesScreen() {
	const [messages, setMessages] = useState(initialMessages);
	const handleDelete = (message) => {
		setMessages(messages.filter((m) => m.id !== message.id));
	};
	return (
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
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({});

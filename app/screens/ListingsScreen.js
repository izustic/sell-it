import { StyleSheet, Text, View, FlatList, Platform, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import colors from '../config/colors'
import ListCard from '../components/ListCard'
import Screen from "../components/Screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const cards = [
	{
		id: 1,
		title: "Red jacket for sale",
		price: 100,
		image: {
			uri: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	},
	{
		id: 2,
		title: "Couch in great condition",
		price: 1000,
		image: {
			// uri: "https://source.unsplash.com/random/?sofa",
			uri: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291Y2h8ZW58MHx8MHx8fDA%3D"
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
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 15,
    flex: 1
  }
})
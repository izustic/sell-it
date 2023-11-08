// import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useState } from "react"
import { View, Keyboard } from "react-native";
import Constants from 'expo-constants'

import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppSwitch from "./app/components/AppSwitch"
import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";
import LoginScreen from "./app/screens/LoginScreen"

// const categories = [
// 	{ label: "Furniture", value: 1},
// 	{ label: "Clothing", value: 2},
// 	{ label: "Electronics", value: 3},
// ]


export default function App() {
	// const [category, setCategory] = useState(categories[0])
	const shouldSetRespond = () => true;
  const onRelease = () => (
    Keyboard.dismiss()
  )
	return (
			<View onResponderRelease={ onRelease } onStartShouldSetResponder={ shouldSetRespond } style={{ height: "100%"}}>
				<LoginScreen />
			 {/* <ViewImageScreen /> */}
			{/* <WelcomeScreen /> */}
			{/* <MessagesScreen />  */}
			{/* <AccountScreen /> */}
			{/* <AppTextInput 
			placeholder="Username"
			icon="email"
		/> */}
		{/* <View style={{ paddingTop: Constants.statusBarHeight, paddingHorizontal: 20}}>
			<AppPicker 
			selectedItem={category}
			onSelectItem={item => setCategory(item)}
			items={categories} icon="apps" placeholder="Category" />
			<AppTextInput icon="email" placeholder="Email" />
		</View> */}
			{/* <AppSwitch /> */}
			{/* <ListingsScreen /> */}
			{/* <ListingDetailsScreen /> */}
		</View>
	);
}




		// <GestureHandlerRootView style={{ flex: 1 }}>
		// 			</GestureHandlerRootView>

// import MessagesScreen from "./app/screens/MessagesScreen";
// import MyAccountScreen from "./app/screens/MyAccountScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// // import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
// // import { GestureHandlerRootView } from "react-native-gesture-handler";

// export default function App() {
// 	return (

// 			  //<ViewImageScreen />
// 				//  <WelcomeScreen />
// 				// <MessagesScreen />
// 				// <MyAccountScreen />
// 				<ListingDetailsScreen />

// 	);
// }

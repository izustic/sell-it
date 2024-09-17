// import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import React, { useEffect } from "react";
import { Keyboard, View } from "react-native";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppSwitch from './app/components/AppSwitch';
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker"
import * as Permissions from "expo-permissions"

export default function App() {
	const shouldSetRespond = () => true;
	const onRelease = () => Keyboard.dismiss();
	const requestPermissions = async () => {
		 const result = await ImagePicker.requestMediaLibraryPermissionsAsync()
		 if(!result.granted)
		 	alert("You need to enable permission to access the library")
	}
	useEffect(() => {
		requestPermissions();
	}, [])
	return (
		<View
			onResponderRelease={onRelease}
			onStartShouldSetResponder={shouldSetRespond}
			style={{ height: "100%" }}
		>
			{/* <Screen /> */}
			{/* <ListingEditScreen /> */}
			<RegisterScreen />
			{/* <LoginScreen /> */}
			{/* <ViewImageScreen /> */}
			{/* <WelcomeScreen /> */}
			{/* <MessagesScreen />  */}
			{/* <AccountScreen /> */}
			{/* <AppSwitch /> */}
			{/* <ListingsScreen /> */}
			{/* <ListingDetailsScreen /> */}
		</View>
	);
}
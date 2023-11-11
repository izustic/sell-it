// import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import React from "react";
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

export default function App() {
	const shouldSetRespond = () => true;
	const onRelease = () => Keyboard.dismiss();
	return (
		<View
			onResponderRelease={onRelease}
			onStartShouldSetResponder={shouldSetRespond}
			style={{ height: "100%" }}
		>
			<ListingEditScreen />
			{/* <RegisterScreen /> */}
			{/* <LoginScreen /> */}
			{/* <ViewImageScreen /> */}
			{/* <WelcomeScreen /> */}
			{/* <MessagesScreen />  */}
			{/* <AccountScreen /> */}
			{/* <AppTextInput 
			placeholder="Username"
			icon="email"
		/> */}
			{/* <AppSwitch /> */}
			{/* <ListingsScreen /> */}
			{/* <ListingDetailsScreen /> */}
		</View>
	);
}
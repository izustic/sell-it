// import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import React from "react";
import { Keyboard, View } from "react-native";
import ListingEditScreen from "./app/screens/ListingEditScreen";

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

// <GestureHandlerRootView style={{ flex: 1 }}>
// 			</GestureHandlerRootView>

// import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			 {/* <ViewImageScreen /> */}
			{/* <WelcomeScreen /> */}
			{/* <MessagesScreen />  */}
			{/* <AccountScreen /> */}
			<AppTextInput 
				placeholder="Username"
				icon="email"
			/>
			{/* <ListingsScreen /> */}
			{/* <ListingDetailsScreen /> */}
		</GestureHandlerRootView>
	);
}

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

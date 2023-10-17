import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import "./global";
import { getBalance } from "./balance";

export default function App() {
	useEffect(() => {
		getBalance();
	}, []);

	return (
		<View style={styles.container}>
			<Text>Minimalistic App</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

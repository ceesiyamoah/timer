import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
const NewTimerScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>New Timer Screen</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
export default NewTimerScreen;

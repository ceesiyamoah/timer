import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
const ReviewTimersScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>Review Timers Screen</Text>
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
export default ReviewTimersScreen;

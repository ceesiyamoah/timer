import React from 'react';
import { View, StyleSheet, Text, Button, Pressable } from 'react-native';
import Tile from '../components/Tile';
const TimersOverviewScreen = ({ navigation }) => {
	return (
		<View style={styles.screen}>
			<Tile text='Create New Timer' router={() => navigation.navigate('New')} />
			<Tile text='Review Timers' router={() => navigation.navigate('Review')} />
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});
export default TimersOverviewScreen;

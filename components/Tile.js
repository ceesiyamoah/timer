import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
const Tile = ({ text, router }) => {
	return (
		<TouchableOpacity onPress={router}>
			<View style={styles.screen}>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	screen: {
		width: 150,
		height: 150,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: 'blue',
		margin: 10,
	},
	text: {
		color: 'white',
	},
});
export default Tile;

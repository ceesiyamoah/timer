import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = ({ children }) => {
	return (
		<View styles={styles.card}>
			<Text>{children}</Text>
		</View>
	);
};

export default Card;

const styles = StyleSheet.create({
	card: {
		width: '80%',
		padding: 10,
		backgroundColor: 'grey',
		margin: 30,
	},
});

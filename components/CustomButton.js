import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
const CustomButton = ({ text, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.button}>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	button: {
		width: 200,
		backgroundColor: 'indigo',
		paddingHorizontal: 20,
		paddingVertical: 5,
		borderRadius: 5,
		marginTop: 10,
	},
	text: {
		color: 'white',
		fontSize: 22,
		textAlign: 'center',
		width: '100%',
	},
});
export default CustomButton;

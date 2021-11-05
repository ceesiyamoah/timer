import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Alert, Modal } from 'react-native';
import CustomButton from '../components/CustomButton';
const NewTimerScreen = () => {
	const [hours, setHours] = useState('');
	const [minutes, setMinutes] = useState('');
	const [timer, setTimer] = useState('');
	const [modalOpen, setModalOpen] = useState(false);
	const verifyMinutes = (text) => {
		console.log(text);
		if (+text >= 60) {
			setMinutes('59');
			setHours((cur) => `${+cur + 1}`);
		} else {
			setMinutes(text);
		}
	};

	const confirmTime = () => {
		if (!minutes && !hours) {
			Alert.alert(
				'No Time set',
				'Please enter minutes or hours to set a timer',
				[{ text: 'Ok', style: 'cancel' }]
			);
		}
		console.log({ hours, minutes });
		const hoursChanged = hours ? parseInt(hours) : 0;
		const minutesChanged = minutes ? parseInt(minutes) : 0;
		const timeToEnd =
			new Date().getTime() +
			(hoursChanged * 60 + parseInt(minutesChanged)) * 60 * 1000;

		const date = new Date(timeToEnd).toLocaleString('en-EN', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digits',
			minute: '2-digits',
		});
		setTimer(date);
		console.log(typeof date);
		setModalOpen(true);
	};
	useEffect(() => {
		setInterval();
	}, [timer]);
	return (
		<View style={styles.screen}>
			<Modal animationType='slide' visible={modalOpen} transparent={true}>
				<View
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
				>
					<View
						style={{
							width: '60%',
							height: '20%',
							// marginTop: '50%',
							backgroundColor: 'white',
							padding: 10,
							borderRadius: 10,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Text>{timer}</Text>
						<CustomButton onPress={() => setModalOpen(false)} text='Close' />
					</View>
				</View>
			</Modal>
			<View style={styles.holder}>
				<TextInput
					style={styles.input}
					keyboardType='number-pad'
					placeholder='HH'
					maxLength={2}
					value={hours}
					onChangeText={(text) => setHours(text)}
				/>
				<Text style={styles.spacer}>:</Text>
				<TextInput
					style={styles.input}
					keyboardType='number-pad'
					placeholder='MM'
					maxLength={2}
					value={minutes}
					onChangeText={verifyMinutes}
				/>
			</View>
			<CustomButton text='Start Timer' onPress={confirmTime} />
			<Text>{timer}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	holder: {
		flexDirection: 'row',
	},
	input: {
		borderColor: 'black',
		borderWidth: 2,
		borderRadius: 5,
		width: 55,
		fontSize: 20,
		padding: 10,
		textAlign: 'center',
	},
	spacer: {
		marginHorizontal: 10,
		fontSize: 20,
		color: 'blue',
	},
});
export default NewTimerScreen;

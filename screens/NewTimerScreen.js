import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, Alert, Modal } from 'react-native';
import { connect } from 'react-redux';
import CustomButton from '../components/CustomButton';
import { getTimeDiffInString } from '../utilities/functions';
import { addNewTimer } from '../store/actions/timers';
import * as Notifications from 'expo-notifications';

const NewTimerScreen = ({ addNewTimer }) => {
	const [hours, setHours] = useState('');
	const [minutes, setMinutes] = useState('');
	const [timer, setTimer] = useState('');
	const [time, setTime] = useState('');
	const [modalOpen, setModalOpen] = useState(false);
	const verifyMinutes = (text) => {
		if (+text >= 60) {
			setMinutes('59');
			setHours((cur) => `${+cur + 1}`);
		} else {
			setMinutes(text);
		}
	};

	useEffect(() => {
		const sub = Notifications.addNotificationReceivedListener(
			(notification) => {
				console.log(notification.notification.request.content.data);
			}
		);
		const background = Notifications.addNotificationResponseReceivedListener(
			(notification) => {
				console.log(notification.notification.request.content.data);
			}
		);

		return () => {
			sub.remove();
			background.remove();
		};
	}, []);

	const confirmTime = () => {
		if (!minutes && !hours) {
			Alert.alert(
				'No Time set',
				'Please enter minutes or hours to set a timer',
				[{ text: 'Ok', style: 'cancel' }]
			);
		}
		const hoursChanged = hours ? parseInt(hours) : 0;
		const minutesChanged = minutes ? parseInt(minutes) : 0;
		const timeToEnd =
			new Date().getTime() +
			(hoursChanged * 60 + parseInt(minutesChanged)) * 60 * 1000;
		// const date = new Date(timeToEnd).toLocaleString('en-EN', {
		// 	year: 'numeric',
		// 	month: 'long',
		// 	day: 'numeric',
		// 	hour: '2-digits',
		// 	minute: '2-digits',
		// });
		addNewTimer(timeToEnd);
		setTimer(timeToEnd);
		setModalOpen(true);
		const trig = parseInt(hoursChanged) * 60 + parseInt(minutesChanged);
		Notifications.scheduleNotificationAsync({
			content: {
				title: 'Time up',
				body: 'Countdown has elapsed',
				data: { timeToEnd },
			},
			trigger: {
				// hour: hours ? parseInt(hours) : 0,
				seconds: trig * 60,
			},
		});
	};
	useEffect(() => {
		let timerCount;
		if (timer) {
			timerCount = setInterval(() => {
				const timediff = new Date(timer).getTime() - new Date().getTime();
				const { hours, mins, secs } = getTimeDiffInString(timediff);
				if (timediff <= 0) {
					setTime('00:00:00');
					clearInterval(timerCount);
					return;
				}
				setTime(`${hours}:${mins}:${secs}`);
			}, 1000);
		}

		return () => {
			clearInterval(timerCount);
		};
	}, [setTime, timer]);
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
						<Text style={styles.timer}>{time}</Text>
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
					keyboardType='numeric'
					placeholder='MM'
					maxLength={2}
					value={minutes}
					onChangeText={verifyMinutes}
				/>
			</View>
			<CustomButton text='Start Timer' onPress={confirmTime} />
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
	timer: {
		fontSize: 20,
		fontWeight: 'bold',

		color: 'indigo',
	},
});
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
	addNewTimer,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTimerScreen);

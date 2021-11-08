import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getTimeDiffInString } from '../utilities/functions';
import Card from './Card';

const TimerCard = ({ endTime }) => {
	const [time, setTime] = useState('');
	const [timeUp, setTimeUp] = useState(false);
	useEffect(() => {
		let timerCount;
		timerCount = setInterval(() => {
			const timediff = new Date(endTime).getTime() - new Date().getTime();
			const { hours, mins, secs } = getTimeDiffInString(timediff);
			if (timediff <= 0) {
				setTime('00:00:00');
				setTimeUp(true);
				clearInterval(timerCount);
				return;
			}
			setTime(`${hours}:${mins}:${secs}`);
		}, 1000);

		return () => {
			clearInterval(timerCount);
		};
	}, []);
	return (
		<View
			style={{
				...styles.card,
				backgroundColor: timeUp ? '#a81103' : '#3ea30b',
			}}
		>
			<Text style={{ ...styles.start, ...styles.color }}>
				End:
				{new Date(endTime).toLocaleString('en-EN', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
					hour: '2-digits',
					minute: '2-digits',
				})}
			</Text>
			<Text style={{ ...styles.color }}>Time Left:{time}</Text>
		</View>
	);
};

export default TimerCard;

const styles = StyleSheet.create({
	card: {
		width: '100%',
		paddingHorizontal: 10,
		paddingVertical: 25,

		margin: 30,
		marginBottom: 10,
		borderRadius: 10,
		marginHorizontal: 10,
	},
	start: {
		fontSize: 20,
	},
	color: {
		color: 'white',
	},
});

import React from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';
import { connect } from 'react-redux';
import TimerCard from '../components/TimerCard';

const ReviewTimersScreen = ({ timers, navigation }) => {
	const renderTimers = ({ item }) => (
		<TimerCard endTime={item.endTime} key={item.id} />
	);
	if (!timers.length) {
		return (
			<View style={styles.screen}>
				<Button
					title='Create new timer'
					color='indigo'
					onPress={() => {
						navigation.navigate('New');
					}}
				/>
			</View>
		);
	}
	return (
		<FlatList
			contentContainerStyle={{ alignItems: 'center' }}
			data={timers}
			keyExtractor={(item) => item.id}
			renderItem={renderTimers}
		/>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	timers: {},
});
const mapStateToProps = (state) => ({
	timers: state.timers.timers,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewTimersScreen);

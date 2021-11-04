import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NewTimerScreen from '../screens/NewTimerScreen';
import TimersOverviewScreen from '../screens/TimersOverviewScreen';
import ReviewTimersScreen from '../screens/ReviewTimersScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName=''
				screenOptions={{
					headerTitleAlign: 'center',
					headerTintColor: 'white',

					headerStyle: { backgroundColor: 'indigo' },
				}}
			>
				<Stack.Screen name='Home' component={TimersOverviewScreen} />
				<Stack.Screen
					name='New'
					component={NewTimerScreen}
					options={{ title: 'Create New Timer' }}
				/>
				<Stack.Screen
					name='Review'
					component={ReviewTimersScreen}
					options={{ title: 'Review Timers' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;

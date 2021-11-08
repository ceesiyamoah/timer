import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import AppNavigator from './Navigation/AppNavigator';
import reducer from './store/reducer';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldPlaySound: true,
		shouldShowAlert: true,
	}),
});

const store = createStore(reducer, composeWithDevTools());

export default function App() {
	return (
		<Provider store={store}>
			<AppNavigator />
		</Provider>
	);
}

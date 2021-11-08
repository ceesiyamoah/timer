import { ADD_TIMER } from '../../types';

export const addNewTimer = (timeToEnd) => {
	return { type: ADD_TIMER, payload: timeToEnd };
};

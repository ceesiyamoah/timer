import Timer from '../../models/timer';
import { ADD_TIMER } from '../../types';

const initialState = {
	timers: [],
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_TIMER:
			//!get timer model
			return {
				...state,
				timers: [...state.timers, new Timer(Date.now(), payload)],
			};

		default:
			return state;
	}
};

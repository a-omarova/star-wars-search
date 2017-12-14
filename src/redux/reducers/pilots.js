import {PILOTS_FOUND} from '../actions/pilots';

export default (state, action) => {
	if (!state) {
		return [];
	}

	switch (action.type) {
		case PILOTS_FOUND:
			return action.pilots.slice();
		default:
			return state;
	}
}

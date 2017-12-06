import {TRANSPORTS_FOUND} from '../actions/transports';

export default (state, action) => {
	if (!state) {
		return [];
	}

	switch (action.type) {
		case TRANSPORTS_FOUND:
			return action.trasports.slice();
		default:
			return state;
	}
}

import {combineReducers} from 'redux';
import transports from './transports';
import pilots from './pilots';

export default combineReducers({
	transports,
	pilots
});

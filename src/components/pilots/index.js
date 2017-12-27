import Pilots from './pilots';
import {findPilots} from '../../redux/actions/pilots';
import {connect} from 'react-redux';

function mapStateToProps(state) {
	return {list: state.pilots || []};
}

function mapDispatchToProps(dispatch) {
	return {
		doFindPilots(value) {
			dispatch(findPilots(value));
		}
	};
}

const enhance =	connect(mapStateToProps, mapDispatchToProps);

export default enhance(Pilots);

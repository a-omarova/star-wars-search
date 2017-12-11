import {withState, withHandlers} from 'recompose';
import {compose} from 'recompose';
import {findTransports} from '../../redux/actions/transports';
import {connect} from 'react-redux';
import Search from './search';

function mapStateToProps(state) {
	return {list: []};
}

function mapDispatchToProps(dispatch) {
	return {
		findSuggestion(value) {
			dispatch(findTransports(value));
		}
	};
}

const enhance = compose(
	connect(mapStateToProps, mapDispatchToProps),
	withState('value', 'updateValue', ''),
	withHandlers({
		updateValue: props => {
			return e => {
				props.updateValue(e.target.value);
				props.findSuggestion(e.target.value)
			}
		},
		onSearch: props => () => props.onSearch(props.value)
	})
);

export default enhance(Search);

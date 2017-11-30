import {connect} from 'react-redux';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';

import {findTransports} from '../../redux/actions/transports';

import Search from './search';

function mapStateToProps(store) {
	const {transports} = store;

	return {
		transports
	};
}

function mapDispatchToProps(dispatch) {
	return {
		doSearch: value => {
			dispatch(findTransports(value));
		}
	};
}

const enhance = compose(
	connect(mapStateToProps, mapDispatchToProps),
	withState('value', 'updateValue', ''),
	withHandlers({
		updateValue: props => e => {
			const {value} = e.target;

			props.updateValue(value);
			props.doSearch(value);
		},
		onSearch: props => () => props.onSearch(props.value)
	})
);

export default enhance(Search);
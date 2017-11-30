import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import Search from './search';

const enhance = compose(
	withState('value', 'updateValue', ''),
	withHandlers({
		updateValue: props => e => props.updateValue(e.target.value),
		onSearch: props => () => props.onSearch(props.value)
	})
);

export default enhance(Search);

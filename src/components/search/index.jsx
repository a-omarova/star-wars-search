import {withState, withHandlers} from 'recompose';
import {compose} from 'recompose';
import Search from './search';

const enhance = compose(
	withState('value', 'updateValue', ''),
	withHandlers({
		updateValue: props => e => props.updateValue(e.target.value),
		onSearch: props => () => props.onSearch(props.value)
	})
);

export default enhance(Search);

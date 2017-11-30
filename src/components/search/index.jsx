import React, {Component} from 'react';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';

class Search extends Component {
	render() {
		const {value, updateValue, onSearch} = this.props;

		return (
			<div>
				<label>Search:
					<input type="text" value={value} onChange={updateValue}/>
				</label>
				<button onClick={onSearch}>
					Search
				</button>
			</div>
		);
	};
}

const enhance = compose(
	withState('value', 'updateValue', ''),
	withHandlers({
		updateValue: props => e => props.updateValue(e.target.value),
		onSearch: props => () => props.onSearch(props.value)
	})
);

export default enhance(Search);

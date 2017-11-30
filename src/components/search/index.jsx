import React, {Component} from 'react';
import {withState} from 'recompose';
import Suggestion from './suggestions/index.jsx';
import './search.css';

class Search extends Component {
	render() {

		const {value, updateValue, onSearch} = this.props;

		return (
			<div className="search">
				<input className="search__input" type="text" value={value} onChange={e => updateValue(e.target.value)}/>
				<button className="search__btn" onClick={() => onSearch(value)}>
					Search
				</button>
				<Suggestion />
			</div>
		);
	};
}

export default withState('value', 'updateValue', '')(Search);

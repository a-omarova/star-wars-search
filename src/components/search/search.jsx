import React, {Component} from 'react';
import Suggestion from './suggestions/index';
import './search.css';

export default class Search extends Component {
	render() {

		const {value, updateValue, onSearch, list} = this.props;

		const hideSuggestionBox = (list.length === 1 && list[0] === value) || list.length === 0;

		return (
			<div className="search">
				<input className="search__input" type="text" value={value} onChange={updateValue}/>
				<button className="search__btn" onClick={() => onSearch(value)}>
					Search
				</button>
				<Suggestion list={list} onClick={v => updateValue({target: {value: v}} )} hidden={hideSuggestionBox}/>
			</div>
		);
	};
}

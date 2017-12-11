import React, {Component} from 'react';
import Suggestion from './suggestions/index.jsx';
import './search.css';

export default class Search extends Component {
	render() {

		const {value, updateValue, onSearch, list} = this.props;

		return (
			<div className="search">
				<input className="search__input" type="text" value={value} onChange={updateValue}/>
				<button className="search__btn" onClick={() => onSearch(value)}>
					Search
				</button>
				<Suggestion list={list}/>
			</div>
		);
	};
}

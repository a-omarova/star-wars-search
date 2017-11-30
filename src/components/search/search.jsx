import React, {Component} from 'react';
import Suggestions from './suggestions';

class Search extends Component {
	render() {
		const {suggestions, value, updateValue, onSearch, onSelect} = this.props;

		return (
			<div>
				<label>Search:
					<input type="text" value={value} onChange={updateValue}/>
				</label>
				<button onClick={onSearch}>
					Search
				</button>
				{suggestions && suggestions.length > 0 && (
					<Suggestions suggestions={suggestions} onSelect={onSelect}/>
				)}
			</div>
		);
	}
}

export default Search;

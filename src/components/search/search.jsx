import React, {Component} from 'react';

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

export default Search;

import React, {Component} from 'react';
import Transports from './transports';

class Search extends Component {
	render() {
		const {transports, value, updateValue, onSearch} = this.props;

		return (
			<div>
				<label>Search:
					<input type="text" value={value} onChange={updateValue}/>
				</label>
				<button onClick={onSearch}>
					Search
				</button>
				{(transports && transports.length > 0) &&
					<Transports transports={transports}/>
				}
			</div>
		);
	};
}

export default Search;

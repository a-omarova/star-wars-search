import React, {Component} from 'react';
import Search from '../components/search/index';

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<Search onSearch={value => console.log('Search: ' + value)} />
			</div>
		);
	};
}

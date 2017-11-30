import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import Search from '../components/search/index';

export default class HomePage extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Search onSearch={value => console.log('Search: ' + value)} />
				</div>
			</Provider>
		);
	};
}

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import Pilots from '../components/pilots/pilots';

export default class HomePage extends Component {
	render() {
		return (
			<Provider store={store}>
				<Pilots />
			</Provider>
		);
	};
}

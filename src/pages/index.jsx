import React, {Component} from 'react';
import Search from '../components/search/index';
import List from '../components/list/index';
import {Provider} from 'react-redux';
import store from '../redux/store';

import './sw.css';
import logo from '../images/sw-logo.svg';

export default class HomePage extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="sw">
					<div className="sw__container">
						<img className="sw__image" src={logo} alt="star wars logo"/>
						<Search onSearch={value => console.log('value ' + value)} />
						<List />
					</div>
				</div>
			</Provider>
		);
	};
}

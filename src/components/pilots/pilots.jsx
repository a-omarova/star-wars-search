import React, {Component} from 'react';
import Search from '../search/index';
import List from '../list/index';

import './sw.css';
import logo from '../../images/sw-logo.svg';

export default class Pilots extends Component {
	render() {
		return(
			<div className="sw">
				<div className="sw__container">
					<img className="sw__image" src={logo} alt="star wars logo"/>
					<Search onSearch={value => console.log('value ' + value)} />
					<List />
				</div>
			</div>
		);
	}
}

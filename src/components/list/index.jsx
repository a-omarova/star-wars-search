import React, {Component} from 'react';
import './list.css';

export default class List extends Component {
	render() {
		return (
			<ul className="list">
				<li className="list__item">Millennium Falcon</li>
				<li className="list__item">Naboo Royal Starship</li>
				<li className="list__item">Death Star</li>
				<li className="list__item">Star Destroyer</li>
				<li className="list__item">Ghost</li>
				<li className="list__item">Azure Angel II</li>
			</ul>
		);
	};
}

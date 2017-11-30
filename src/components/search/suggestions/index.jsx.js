import React, {Component} from 'react';
import './suggestion.css';

export default class Suggestion extends Component {
	render () {
		return (
			<ul className="suggestion">
				<li className="suggestion__item">Millennium Falcon</li>
				<li className="suggestion__item">Naboo Royal Starship</li>
				<li className="suggestion__item">Death Star</li>
				<li className="suggestion__item">Star Destroyer</li>
				<li className="suggestion__item">Ghost</li>
				<li className="suggestion__item">Azure Angel II</li>
			</ul>
		)
	}
}

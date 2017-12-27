import React, {Component} from 'react';
import './list.css';

export default class List extends Component {
	render() {
		const {list} = this.props;

		return (
			<ul className="list">
				{list.map((value, index) => (
					<li className="list__item" key={index}> {value} </li>
				))}
			</ul>
		)
	};
}

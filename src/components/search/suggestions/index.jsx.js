import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './suggestion.css';

export default class Suggestion extends Component {
	render () {

		const {list, onClick} = this.props;

		return (
			<ul className="suggestion">
				{list.map((value, index) => (
					<li сlassName="suggestion__item" key={index} onClick={() => onClick(value)}> {value} </li>
				))}
			</ul>
		)
	}
}

Suggestion.propTypes = {
	list: PropTypes.array.isRequired
};

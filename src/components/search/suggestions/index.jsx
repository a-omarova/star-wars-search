import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './suggestion.css';

export default class Suggestion extends Component {
	render () {

		const {list, onClick, hidden} = this.props;

		if (hidden) {
			return null;
		}

		return (
			<ul className="suggestion">
				{list.map((value, index) => (
					<li className="suggestion__item" key={index} onClick={() => onClick(value)}> {value} </li>
				))}
			</ul>
		)
	}
}

Suggestion.propTypes = {
	list: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired,
	hidden: PropTypes.bool.isRequired
};

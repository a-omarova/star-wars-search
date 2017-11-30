import React, {Component} from 'react';

export default class Suggestions extends Component {
	render() {
		const {suggestions, onSelect} = this.props;

		return (
			<ul>
				{suggestions.map(t => (
					<li key={t.pk} onClick={() => onSelect(t.fields.name)}>
						{t.fields.name}
					</li>
				))}
			</ul>
		)
	}
}

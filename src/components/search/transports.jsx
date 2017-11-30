import React, {Component} from 'react';

export default class Transports extends Component {
	render() {
		const {transports} = this.props;

		return (
			<ul>
				{transports.map(t => (
					<li key={t.pk}>
						{t.fields.name}
					</li>
				))}
			</ul>
		)
	}
}

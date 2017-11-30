import transportsData from '../../data/transport.json';

export const TRANSPORTS_FOUND = 'TRANSPORTS_FOUND';

function filterTransports(name) {
	const normalizedName = name.toLowerCase();

	return transportsData
		.filter(item => (
			item.fields.name.toLowerCase().indexOf(normalizedName)) >= 0
		)
		.slice(0, 10);
}

export function findTransports(name) {
	console.log(`Perform find transport for: "${name}"`);

	return {
		type: TRANSPORTS_FOUND,
		transports: name ? filterTransports(name) : []
	}
}

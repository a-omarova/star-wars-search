import transportsList from '../../data/transport.json';

export const TRANSPORTS_FOUND = 'TRANSPORTS_FOUND';

const filterTransports = name =>  {
	return transportsList
		.filter(item => item.fields.name.toLowerCase().indexOf(name.toLowerCase()) >= 0)
};

export const findTransports = (name) => {
	return {
		type: TRANSPORTS_FOUND,
		transports: name ? filterTransports(name) : []
	}
};

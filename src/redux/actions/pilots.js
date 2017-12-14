import transportsList from '../../data/transport.json';

export const PILOTS_FOUND = 'PILOTS_FOUND';

const filterPilots = name =>  {
	return transportsList
		.filter(item => item.fields.name.toLowerCase().indexOf(name.toLowerCase()) >= 0)
};

export const findPilots = (name) => {
	return {
		type: PILOTS_FOUND,
		transports: name ? filterPilots(name) : []
	}
};

export const TRANSPORTS_FOUND = 'TRANSPORTS_FOUND';

export function findTransports(name) {
	return {
		type: TRANSPORTS_FOUND,
		transports: []
	}
}

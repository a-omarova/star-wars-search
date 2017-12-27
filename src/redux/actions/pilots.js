import transports from '../../data/transport.json';
import people from '../../data/people.json';
import starships from '../../data/starships.json';

//Ищем пилотов по следующему алгоритму:
// в таблице transport есть название корабля (pk === 12)
// в таблице starship по pk === 12 находим массив с номерами пилотов
// в таблице people находим имена пилотов

export const PILOTS_FOUND = 'PILOTS_FOUND';

const filterPilots = name =>  {
	const filteredTransports = transports
		.filter(item => item.fields.name.toLowerCase() === name.toLowerCase());

	if (filteredTransports.length === 0) {
		return [];
	}

	const transportPk = filteredTransports[0].pk;

	const filteredStarships = starships
		.filter(elem => elem.pk === transportPk);

	if (filteredStarships.length === 0) {
		return [];
	}

	const pilots = filteredStarships[0].fields.pilots;

	return pilots.map(pk => {
		const peopleList = people.filter(person => person.pk === pk);

		if (peopleList.length === 0) {
			return null;
		}

		return peopleList[0].fields.name;
	}).filter(name => name);
};

export const findPilots = (name) => {
	return {
		type: PILOTS_FOUND,
		pilots: name ? filterPilots(name) : []
	}
};

import transportsList from '../../data/transport.json';


//Ищем пилотов по следующему алгоритму:
// в таблице transport есть название корабля (pk === 12)
// в таблице starship по pk === 12 находим массив с номерами пилотов
// в таблице people находим имена пилотов

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

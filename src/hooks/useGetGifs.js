import { useState } from 'react';
import { getGifs } from '../api/getGifs';

export const useGetGifs = (categoria) => {
	const [estadoGifs, setEstadoGifs] = useState({
		data: [],
		loading: true,
	});
	getGifs(categoria).then((gifs) => {
		setEstadoGifs({
			data: gifs,
			loading: false,
		});
	});
	return estadoGifs;
};

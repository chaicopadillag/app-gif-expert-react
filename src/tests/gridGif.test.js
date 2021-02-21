import React from 'react';
import { shallow } from 'enzyme';
import GridGif from '../components/GridGif';
import { useGetGifs } from '../hooks/useGetGifs';

jest.mock('../hooks/useGetGifs');

describe('Prueba de Componente <GridGif/>', () => {
	const categoria = 'Terror';

	useGetGifs.mockReturnValue({
		data: [],
		loading: true,
	});
	const wraper = shallow(<GridGif categoria={categoria} />);

	test('Debe hace to matchSnapshot', () => {
		expect(wraper).toMatchSnapshot();
	});

	test('Simular que haya cargados imagenes useGetImagenes', () => {
		const data = [
			{
				id: '123',
				title: 'Titulo de la IMG',
				url: 'https://localhost/img/foto.jpg',
			},
			{
				id: 'ACB',
				title: 'Titulo de la AB',
				url: 'https://localhost/img/foto2.jpg',
			},
		];
		useGetGifs.mockReturnValue({
			data: data,
			loading: false,
		});
		const wraper = shallow(<GridGif categoria={categoria} />);
		expect(wraper).toMatchSnapshot();
		expect(wraper.find('p').exists()).toBe(true);
		expect(wraper.find('ItemGifGrit').length).toBe(data.length);
	});
});

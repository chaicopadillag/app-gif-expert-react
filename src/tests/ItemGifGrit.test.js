import React from 'react';
import { shallow } from 'enzyme';
import ItemGifGrit from '../components/ItemGifGrit';

describe('Prueba de <ItemGifGrit/>', () => {
	const props = {
		title: 'Mi Titulo',
		url: 'https://localhost/img.jpg',
	};
	const wrapper = shallow(<ItemGifGrit {...props} />);

	test('Debe mostrar el componente <ItemGifGrit/>', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('evaluar titulo enviado', () => {
		const titulo = wrapper.find('p').text().trim();
		expect(titulo).toBe(props.title);

		const img = wrapper.find('img');
		expect(img.props().src).toBe(props.url);
	});

	test('debe de tener la clase de animate_fadeIn', () => {
		const div = wrapper.find('div');
		expect(div.props().className).toContain('animate__fadeIn');
	});
});

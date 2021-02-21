import React from 'react';
const { shallow } = require('enzyme');
const { default: GitExpertApp } = require('../GitExpertApp');

describe('Test de <GifExpertApp/>', () => {
	test('Debe hace Match con SnatShop', () => {
		const wraper = shallow(<GitExpertApp />);
		expect(wraper).toMatchSnapshot();
	});
	test('Debe hacer to match la cantidad de veces que envio categorias', () => {
		const cats = ['Terror', 'Comedia', 'Drama'];
		const wraper = shallow(<GitExpertApp defaultCatg={cats} />);
		expect(wraper).toMatchSnapshot();
		expect(wraper.find('GridGif').length).toBe(cats.length);
	});
});

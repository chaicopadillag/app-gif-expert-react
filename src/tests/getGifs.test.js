import { getGifs } from '../api/getGifs';

describe('Test al Helpers getGifs fetch api', () => {
	test('De mostrar 10 Gifs', async () => {
		const imagenes = await getGifs('Goku');
		expect(imagenes.length).toBe(10);
	});

	test('De mostrar 0 Gifs', async () => {
		const imagenes = await getGifs('');
		expect(imagenes.length).toBe(0);
	});
});

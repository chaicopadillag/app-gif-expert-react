import { useGetGifs } from '../hooks/useGetGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Test en el hook useGetGifs', () => {
	test('debe debe retornar el estado inicial', async () => {
		// const { data: gifs, loading } = useGetGifs('Goku');
		const { result, waitForNextUpdate } = renderHook(() => {
			return useGetGifs('Goku');
		});
		const { data, loading } = result.current;

		await waitForNextUpdate();

		expect(data).toEqual([]);
		expect(loading).toBe(true);
	});

	test('debe debe retornar un arreglos de img y loading false', async () => {
		const { result, waitForNextUpdate } = renderHook(() => useGetGifs('Goku'));

		await waitForNextUpdate();

		const { data, loading } = result.current;

		expect(data.length).toBe(10);
		expect(loading).toBe(false);
	});
});

import { shallow } from 'enzyme';
import AddCategory from '../components/AddCategory';

describe('Test add Categoría', () => {
	const setCategorias = jest.fn();
	let wraper = shallow(<AddCategory setCategorias={setCategorias} />);

	beforeEach(() => {
		jest.clearAllMocks();
		wraper = shallow(<AddCategory setCategorias={setCategorias} />);
	});

	test('Debe mostrar el Componente <AddCategory/>', () => {
		expect(wraper).toMatchSnapshot();
	});

	test('cambio de input', () => {
		const inputText = wraper.find('input'),
			value = 'Hola Mundo!';
		inputText.simulate('change', { target: { value } });
		expect(wraper.find('input').prop('value')).toBe(value);
	});

	test('El formulario no enviar datos', () => {
		wraper.find('form').simulate('submit', { preventDefault() {} });
		expect(setCategorias).not.toHaveBeenCalled();
	});

	test('debe de llamar el setCategorias y limpiar el input text', () => {
		const inputText = wraper.find('input'),
			value = 'Hola Mundo!';
		inputText.simulate('change', { target: { value } });
		wraper.find('form').simulate('submit', { preventDefault() {} });
		expect(setCategorias).toHaveBeenCalled();
		expect(setCategorias).toHaveBeenCalledTimes(1);
		expect(setCategorias).toHaveBeenCalledWith(expect.any(Function));

		expect(wraper.find('input').prop('value')).toBe('');
	});
});

import React, { useState } from 'react';
import PropTypes from 'prop-types';
const AddCategory = ({ setCategorias }) => {
	const [inputCategoria, setInputCategoria] = useState('');
	const handleCateogriaChange = (e) => {
		setInputCategoria(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputCategoria !== '') {
			setCategorias((cats) => [inputCategoria, ...cats]);
			setInputCategoria('');
		} else {
			alert('Ingrese una categoría');
		}
	};
	return (
		<form method="POST" onSubmit={handleSubmit}>
			<input type="text" onChange={handleCateogriaChange} value={inputCategoria} placeholder="Buscar..." />
		</form>
	);
};
AddCategory.propTypes = {
	setCategorias: PropTypes.func.isRequired,
};
export default AddCategory;

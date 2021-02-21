import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GridGif from './components/GridGif';

const GitExpertApp = ({ defaultCatg = [] }) => {
	const [categorias, setCategorias] = useState(defaultCatg);
	return (
		<>
			<h2>Git Expert App</h2>
			<AddCategory setCategorias={setCategorias} />
			<hr />
			<div>
				{categorias.map((cat) => (
					<GridGif key={cat} categoria={cat} />
				))}
			</div>
		</>
	);
};
export default GitExpertApp;

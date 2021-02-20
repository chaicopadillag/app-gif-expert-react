import React from 'react';
import PropTypes from 'prop-types';
import { useGetGifs } from '../hooks/useGetGifs';
import ItemGifGrit from './ItemGifGrit';

const GridGif = ({ categoria }) => {
	const { data: gifs, loading } = useGetGifs(categoria);
	return (
		<>
			<h2 className="animate__animated animate__fadeIn"> {categoria}</h2>
			<p className="animate__animated animate__flash">{loading ? 'Cargando...' : 'Cargado!!!'}</p>
			<div className="card-grid">
				{gifs.map((gif) => (
					<ItemGifGrit key={gif.id} {...gif} />
				))}
			</div>
		</>
	);
};
GridGif.propTypes = {
	categoria: PropTypes.string.isRequired,
};

export default GridGif;

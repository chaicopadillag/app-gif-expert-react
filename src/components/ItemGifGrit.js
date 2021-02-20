import React from 'react';

const ItemGifGrit = ({ title, url }) => {
	return (
		<div className="card animate__animated animate__fadeIn">
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

export default ItemGifGrit;

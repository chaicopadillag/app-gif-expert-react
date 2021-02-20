export const getGifs = async (categoria) => {
	const API = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&api_key=OoBKmC7PIZetnFfax6HOkiMbhsXSA9Zv&limit=10`;

	const respuesta = await fetch(API);
	const { data } = await respuesta.json();
	const imagenes = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images.downsized_medium.url,
		};
	});
	return imagenes;
};

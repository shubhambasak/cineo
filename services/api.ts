export const OMDB_CONFIG = {
	BASE_URL: 'https://www.omdbapi.com/',
	API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,

	HEADERS: {
		accept: 'application/json',
		Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
	}
}

export const fetchMovies = async ({ query }:{ query: string }) =>{
	const endpoint = query
		?`${OMDB_CONFIG.BASE_URL}?apikey=${OMDB_CONFIG.API_KEY}&s=${encodeURIComponent(query)}`
		:`${OMDB_CONFIG.BASE_URL}?apikey=${OMDB_CONFIG.API_KEY}&s=movie`;

	const response = await fetch(endpoint,{
		method: 'GET',
		headers: OMDB_CONFIG.HEADERS,
	});

	if(!response.ok){
		throw new Error(`Failed to fetch movies: ${response.statusText}`);
	}

	const data = await response.json();

	return data.Search;
}


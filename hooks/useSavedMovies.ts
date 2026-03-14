import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SAVED_MOVIES_KEY = "@cineo/saved_movies";

export type SavedMovie = {
	imdbID: string;
	Title: string;
	Poster: string;
	Year: string;
};

export function useSavedMovies() {
	const [savedMovies, setSavedMovies] = useState<SavedMovie[]>([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		AsyncStorage.getItem(SAVED_MOVIES_KEY).then((json) => {
			if (json) {
				try {
					setSavedMovies(JSON.parse(json));
				} catch {
					setSavedMovies([]);
				}
			}
			setLoaded(true);
		});
	}, []);

	const persist = useCallback((movies: SavedMovie[]) => {
		setSavedMovies(movies);
		AsyncStorage.setItem(SAVED_MOVIES_KEY, JSON.stringify(movies));
	}, []);

	const isSaved = useCallback(
		(imdbID: string) => savedMovies.some((m) => m.imdbID === imdbID),
		[savedMovies]
	);

	const toggleSave = useCallback(
		(movie: SavedMovie) => {
			const exists = savedMovies.some((m) => m.imdbID === movie.imdbID);
			const next = exists
				? savedMovies.filter((m) => m.imdbID !== movie.imdbID)
				: [...savedMovies, movie];
			persist(next);
		},
		[savedMovies, persist]
	);

	return { savedMovies, isSaved, toggleSave, loaded };
}

import React, { createContext, useContext } from "react";
import { useSavedMovies } from "@/hooks/useSavedMovies";

type SavedMovie = {
	imdbID: string;
	Title: string;
	Poster: string;
	Year: string;
};

type SavedMoviesContextType = {
	savedMovies: SavedMovie[];
	isSaved: (imdbID: string) => boolean;
	toggleSave: (movie: SavedMovie) => void;
	loaded: boolean;
};

const SavedMoviesContext = createContext<SavedMoviesContextType | null>(null);

export function SavedMoviesProvider({ children }: { children: React.ReactNode }) {
	const value = useSavedMovies();
	return (
		<SavedMoviesContext.Provider value={value}>
			{children}
		</SavedMoviesContext.Provider>
	);
}

export function useSavedMoviesContext() {
	const ctx = useContext(SavedMoviesContext);
	return ctx;
}

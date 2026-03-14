import { View, Image, FlatList, ActivityIndicator, Text } from "react-native";
import React, { useState, useCallback } from "react";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";

const Search = () => {
	const [query, setQuery] = useState("");

	const {
		data: movies,
		loading: moviesLoading,
		error: moviesError,
		refetch,
	} = useFetch(() => fetchMovies({ query: query || "movie" }), false);

	const handleSearch = useCallback(() => {
		refetch();
	}, [refetch]);

	React.useEffect(() => {
		const timer = setTimeout(() => refetch(), query.trim() ? 300 : 0);
		return () => clearTimeout(timer);
	}, [query]);

	return (
		<View className="flex-1 bg-primary">
			<Image
				source={images.bg}
				className="absolute w-full h-full z-0"
				resizeMode="cover"
			/>
			<View className="flex-1 px-5 pt-20">
				<Image
					source={icons.logo}
					className="w-12 h-10 mb-5 mx-auto"
				/>
				<SearchBar
					placeholder="Search for a movie"
					value={query}
					onChangeText={setQuery}
					onSubmitEditing={handleSearch}
				/>
				<Text className="text-lg text-white font-bold mt-5 mb-3">
					{query.trim() ? "Search Results" : "Trending"}
				</Text>
				{moviesLoading ? (
					<ActivityIndicator
						size="large"
						color="#0000ff"
						className="mt-10 self-center"
					/>
				) : moviesError ? (
					<Text className="text-light-200 mt-4">
						Error: {moviesError?.message}
					</Text>
				) : movies && movies.length > 0 ? (
					<FlatList
						data={movies}
						renderItem={({ item }) => <MovieCard {...item} />}
						keyExtractor={(item) => item.imdbID.toString()}
						numColumns={3}
						columnWrapperStyle={{
							justifyContent: "flex-start",
							gap: 20,
							paddingRight: 5,
							marginBottom: 10,
						}}
						className="mt-2 pb-32"
						scrollEnabled={true}
						showsVerticalScrollIndicator={false}
					/>
				) : (
					<Text className="text-light-200 mt-4">
						{query.trim()
							? "No movies found. Try a different search."
							: "Type to search for movies"}
					</Text>
				)}
			</View>
		</View>
	);
};

export default Search;

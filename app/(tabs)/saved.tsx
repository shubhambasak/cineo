import {
	View,
	Text,
	Image,
	FlatList,
	ActivityIndicator,
} from "react-native";
import React from "react";
import MovieCard from "@/components/MovieCard";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { useSavedMoviesContext } from "@/context/SavedMoviesContext";

const Saved = () => {
	const { savedMovies, loaded } = useSavedMoviesContext() ?? {
		savedMovies: [],
		loaded: true,
	};

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
				<Text className="text-lg text-white font-bold mt-5 mb-3">
					Saved Movies
				</Text>
				{!loaded ? (
					<ActivityIndicator
						size="large"
						color="#0000ff"
						className="mt-10 self-center"
					/>
				) : savedMovies.length > 0 ? (
					<FlatList
						data={savedMovies}
						renderItem={({ item }) => <MovieCard {...item} />}
						keyExtractor={(item) => item.imdbID}
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
						No saved movies yet. Save movies from Home or Search.
					</Text>
				)}
			</View>
		</View>
	);
};

export default Saved;

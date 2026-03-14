import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useSavedMoviesContext } from "@/context/SavedMoviesContext";
import { icons } from "@/constants/icons";

type Movie = {
	imdbID: string;
	Title: string;
	Poster: string;
	Year: string;
};

const MovieCard = ({ imdbID, Poster, Title, Year }: Movie) => {
	const savedCtx = useSavedMoviesContext();
	const isSaved = savedCtx?.isSaved(imdbID) ?? false;
	const toggleSave = savedCtx?.toggleSave;

	const handleSavePress = () => {
		toggleSave?.({ imdbID, Title, Poster, Year });
	};

	return (
		<View className="w-[30%]">
			<View className="relative">
				<Link href={`/movies/${imdbID}`} asChild>
					<TouchableOpacity>
						<Image
							source={{
								uri:
									Poster !== "N/A"
										? Poster
										: "https://placehold.co/600x400/1a1a1a/ffffff.png",
							}}
							className="w-full h-52 rounded-lg"
							resizeMode="cover"
						/>
						<Text className="text-sm font-bold text-white mt-2">{Title}</Text>
						<Text className="text-xs text-gray-400">{Year}</Text>
					</TouchableOpacity>
				</Link>
				{toggleSave && (
					<Pressable
						onPress={handleSavePress}
						className="absolute top-2 right-2 bg-dark-200/90 rounded-full p-2"
						style={{ zIndex: 10 }}
					>
						<Image
							source={icons.save}
							className="size-4"
							tintColor={isSaved ? "#AB8BFF" : "#A8B5DB"}
						/>
					</Pressable>
				)}
			</View>
		</View>
	);
};

export default MovieCard;


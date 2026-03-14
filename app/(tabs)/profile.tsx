import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const Profile = () => {
	return (
		<View className="flex-1 bg-primary">
			<Image
				source={images.bg}
				className="absolute w-full h-full z-0"
				resizeMode="cover"
			/>
			<ScrollView
				className="flex-1 px-5"
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					minHeight: "100%",
					paddingTop: 80,
					paddingBottom: 100,
				}}
			>
				<Image
					source={icons.logo}
					className="w-16 h-14 mb-6 mx-auto"
				/>
				<Text className="text-2xl text-white font-bold text-center mb-1">
					Cineo
				</Text>
				<Text className="text-light-200 text-center mb-10">
					Your personal movie companion
				</Text>

				<View className="bg-dark-200 rounded-2xl px-5 py-4 mb-4">
					<Text className="text-white font-semibold mb-2">About</Text>
					<Text className="text-light-200 text-sm">
						Discover movies, save your favorites, and explore with Cineo.
					</Text>
				</View>

				<View className="bg-dark-200 rounded-2xl px-5 py-4 mb-4">
					<Text className="text-white font-semibold mb-2">Version</Text>
					<Text className="text-light-200 text-sm">1.0.0</Text>
				</View>
			</ScrollView>
		</View>
	);
};

export default Profile;

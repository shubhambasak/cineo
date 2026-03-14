import {Image, View, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props{
	placeholder: string;
	onPress?: () => void;
	value?: string;
	onChangeText?: (text: string) => void;
	onSubmitEditing?: () => void;
	editable?: boolean;
}

const SearchBar = ({
	placeholder, onPress, value, onChangeText, onSubmitEditing, editable = true
}: Props) => {
	const isSearchMode = onChangeText !== undefined;
	const content = (
		<View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
			<Image 
				source={icons.search}
				className="size-5"
				resizeMode="contain"
				tintColor="#ad8bff"
			/>
			<TextInput 
				placeholder={placeholder}
				value={isSearchMode ? value : ""}
				onChangeText={onChangeText}
				onSubmitEditing={onSubmitEditing}
				editable={isSearchMode && editable}
				placeholderTextColor="#a8b5db"
				className="flex-1 ml-2 text-white"
			/>
		</View>
	);
	return isSearchMode ? (
		content
	) : (
		<TouchableOpacity onPress={onPress} activeOpacity={0.8}>
			{content}
		</TouchableOpacity>
	);
}

export default SearchBar

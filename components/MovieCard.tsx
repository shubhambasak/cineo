import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

type Movie = {
    imdbID: string
    Title: string
    Poster: string
    Year: string
}

const MovieCard = ({ imdbID, Poster, Title, Year }: Movie) => {
    return (
        <Link href={`/movies/${imdbID}`} asChild>
            <TouchableOpacity className="w-[30%]">

                <Image
                    source={{
                        uri: Poster !== "N/A"
                            ? Poster
                            : "https://placehold.co/600x400/1a1a1a/ffffff.png"
                    }}
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover"
                />

                <Text className="text-sm font-bold text-white mt-2">
                    {Title}
                </Text>

                <Text className="text-xs text-gray-400">
                    {Year}
                </Text>

            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard


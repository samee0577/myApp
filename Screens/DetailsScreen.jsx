import React from 'react';
import { View, Text, StyleSheet, Image, useColorScheme } from 'react-native';
import { getImageUrl } from '../data/fetch';
import { ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { title, overview, release_date, poster_path, vote_average, vote_count } = route.params.item;
  console.log(poster_path)
  const imageUrl = getImageUrl(poster_path) || 'https://via.placeholder.com/500x750';
  console.log(imageUrl)
  const isDarkMode = useColorScheme() === 'dark';
  const textStyles = {
    color: isDarkMode ? '#fff' : '#333',
  };

  return (

    <View>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.poster}
        />
        <Text style={[styles.title, textStyles]}>{title}</Text>
        <Text style={[styles.description, textStyles]}>{overview}</Text>
        <Text style={[styles.releaseDate]}>{release_date}</Text>
        <View style={styles.vote}>
          <Text style={textStyles}>Vote average</Text>
          <Text style={[styles.voteText, textStyles]}>{vote_average}/10</Text>
          <Text style={textStyles}>Vote count</Text>
          <Text style={[styles.voteText, textStyles]}>{vote_count}</Text>
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  poster: {
    height: 450,
    width: 300,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "green",
    marginBottom: 24,
    alignSelf: "center",
    elevation: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
  releaseDate: {
    color: "gray",
    fontSize: 16,
    marginTop: 8,
  },
  vote: {
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    marginTop: 8,
    gap: 10,
  },
  voteText: {
    fontSize: 16,
    padding: 8,
    borderRadius: 12,
    borderColor: "rgb(70, 147, 255)",
    borderWidth: 1,
    marginBottom: 8
  },
  scroll: {
    flexDirection: "column",
    padding: 20,
    paddingBottom: 40,
  }
});

export default DetailsScreen;


// components/MovieCard.tsx
import { Image, StyleSheet, Pressable, Text, useColorScheme, Alert } from 'react-native';
import { getImageUrl } from '../data/fetch';

export default function MovieCard({ title, posterPath , onPress={onPress} }) {
  const imageUrl = getImageUrl(posterPath) || 'https://via.placeholder.com/500x750';
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { opacity: pressed ? 0.5 : 1 },
        { borderColor: isDarkMode ? 'green' : 'rgba(179, 0, 0, 0.5)' },
      ]}
      //temporary
      onPress={() => {
        if (onPress) {
          onPress();
        } else {
          Alert.alert('this is temporary till we finish the details page!');
        }
      }}
    >
      <Image
        source={{ uri: imageUrl }}
        style={styles.poster}
        resizeMode="cover"
      />
      <Text
        style={[
          styles.title,
          { color: isDarkMode ? 'white' : 'black' },
        ]}
        numberOfLines={2}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    marginHorizontal: 8,
    marginVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  poster: {
    width: '100%',
    height: 220,
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    padding: 12,
    textAlign: 'left',
    backgroundColor:"rgba(58, 105, 167, 0.28)"
  },
});


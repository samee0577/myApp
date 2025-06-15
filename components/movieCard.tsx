// components/MovieCard.tsx
import { Image, StyleSheet, Pressable, Text, useColorScheme, Alert } from 'react-native';
import { getImageUrl } from '../data/fetch';

interface MovieCardProps {
  title: string;
  posterPath: string;
  onPress?: () => void;
}

export default function MovieCard({ title, posterPath, onPress }: MovieCardProps) {
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
    backgroundColor: 'rgba(74, 74, 74, 0.42)',
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  poster: {
    width: '100%',
    height: 210,
    borderRadius: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    padding: 8,
    textAlign: 'center',
  },
});


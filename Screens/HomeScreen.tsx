import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
  Alert,
  useColorScheme,
  TextInput,
} from 'react-native';
import MovieCard from '../components/movieCard';
import { fetchTrendingMovies } from '../data/fetch';
import NavRow from '../components/navRow';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};


export default function HomeScreen() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  const backgroundColor = isDarkMode ? '#181c24' : '#f8fafd';
  const headerBg = isDarkMode ? '#23272F' : '#347cdb';
  const textColor = isDarkMode ? '#fff' : '#181c24';
  const subtitleColor = isDarkMode ? '#b0b8c1' : '#f3f6fa';

  useEffect(() => {
    fetchTrendingMovies()
      .then(setMovies)
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={[styles.container, { backgroundColor }]}>

      <View style={[styles.header, { backgroundColor: headerBg }]}>
        <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#fff' }]}>
          🎬 Movie Explorer
        </Text>
        <Text style={[styles.subtitle, { color: subtitleColor }]}>
          Discover trending movies fetched from TMDB
        </Text>
      </View>

      <NavRow />

      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, { backgroundColor: isDarkMode ? '#23272F' : '#fff', color: textColor }]}
          placeholder="Search for a movie..."
          placeholderTextColor={isDarkMode ? '#b0b8c1' : '#444'}
          value={search}
          onChangeText={setSearch}
        />
        <Pressable onPress={() => {
          Alert.alert(`${search} \nsorry but it doesn't do anything yet`)
          setSearch(''); 
          }}>
          <Text style={styles.btn}>Search</Text>
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {loading && (
          <ActivityIndicator
            size="large"
            color={isDarkMode ? '#fff' : '#347cdb'}
            style={{ marginTop: 20 }}
          />
        )}

        {!loading && movies.length === 0 && (
          <Text style={{ textAlign: 'center', color: textColor }}>
            No movies found.
          </Text>
        )}

        <View style={styles.cardsWrapper}>
          {movies.map((item: any) => (
            <MovieCard
              key={item.id}
              title={item.title}
              posterPath={item.poster_path}
            />
          ))}

        </View>

      </ScrollView>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          onPress={() => {
            setLoading(true);
            setTimeout(() => setLoading(false), 1000);
          }}
          style={[
            styles.button,
            { backgroundColor: isDarkMode ? '#347cdb' : '#23272F' },
          ]}
        >
          <Text style={styles.buttonText}>Refresh Movies</Text>
        </TouchableOpacity>

        <Pressable
          onPress={() => Alert.alert('Button Pressed!')}
          style={[
            styles.button,
            { backgroundColor: isDarkMode ? '#23272F' : '#347cdb' },
          ]}
        >
          <Text style={styles.buttonText}>Press Me</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop:5,
    gap: 10,
  },
  input: {
    height: 44,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    flex: 3,
  },
  btn: {
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    backgroundColor: '#347cdb',
    textAlign: 'center',
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    opacity: 0.85,
    paddingHorizontal: 24,
  },
  scrollContent: {
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 40,
    paddingHorizontal: 14,
    minHeight: 300,
  },
  cardsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    gap: 20,
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    paddingBottom: 35,
    width: '100%',
    backgroundColor: '#44444480',
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 26,
    borderRadius: 10,
    marginHorizontal: 8,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.5,
  },
});

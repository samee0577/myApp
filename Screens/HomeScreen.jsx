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
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const theme = useColorScheme();
  const isDarkMode = theme === 'dark';

  const backgroundColor = isDarkMode ? '#181c24' : '#f8fafd';
  const headerBg = isDarkMode ? 'rgba(52, 124, 219, 0.2)' : 'rgba(52, 124, 219, 0.75)';
  const textColor = isDarkMode ? '#fff' : '#181c24';
  const subtitleColor = isDarkMode ? '#b0b8c1' : '#f3f6fa';

  const navigation = useNavigation();

  useEffect(() => {
    fetchTrendingMovies()
      .then(setMovies)
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={[styles.container, { backgroundColor }]}>

      <View style={[styles.header, { backgroundColor: headerBg }]}>
        <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#fff' }]}>
          🎬 TrendFlix
        </Text>
        <Text style={[styles.subtitle, { color: subtitleColor }]}>
          Discover trending movies of  the week
        </Text>
      </View>

      <NavRow />


      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>


        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input, { backgroundColor: isDarkMode ? '#23272F' : '#fff', color: textColor }]}
            placeholder="Search for a movie..."
            placeholderTextColor={isDarkMode ? '#b0b8c1' : '#444'}
            value={search}
            onChangeText={setSearch}
          />
          <Pressable onPress={() => {
            Alert.alert(`search for: ${search} \nsorry but it doesn't do anything yet`)
            setSearch('');
          }}>
            <Text style={styles.btn}>Search</Text>
          </Pressable>
        </View>

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
          {movies.map((item) => (
            <MovieCard
              key={item.id}
              title={item.title}
              posterPath={item.poster_path}

              onPress={() => {
                navigation.navigate('Details', { item });
                console.log(item);
              }}
            />
          ))}

        </View>
        <View>
          <Text style={[styles.footer, !isDarkMode && styles.footerLight]}>Made with passion for learning and sharing.
          {'\n \n'} -Developed by Shaikh Samee</Text>

        </View>
      </ScrollView>

      <View style={[styles.buttonRow, { backgroundColor: headerBg }]}>
        <TouchableOpacity
          onPress={() => {
            console.log("refreshing movies");
            setLoading(true);
            fetchTrendingMovies()
              .then(setMovies)
              .finally(() => setLoading(false));
          }}
          style={[styles.button, { backgroundColor: isDarkMode ? 'rgba(52, 124, 219, 0.82)' : 'rgba(35, 39, 47, 1)' }]}
        >
          <Text style={styles.buttonText}>Refresh Movies</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  footer: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 12,
    color: '#94a3b8',
  },
  footerLight: {
    color: '#64748b',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 5,
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
    alignItems: 'left',
    paddingTop: 40,
    paddingBottom: 12,
    flexDirection: "column",
    paddingHorizontal: 15,
    gap: 2,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
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
    gap: 10,
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 15,
    width: '100%',
    backgroundColor: 'rgba(28, 28, 28, 0.81)',

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#347cdb',
    borderRadius: 12,
    marginBottom: 3
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.5,
  },
});

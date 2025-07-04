import { StyleSheet, Text, View, ScrollView, useColorScheme } from 'react-native';
import React from 'react';
import NavRow from '../components/navRow';

const AboutScreen = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={{ flex: 1 }}>
      <NavRow />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[styles.heading, !isDark && styles.headingLight]}>
          - About Movie Explorer
        </Text>

        <View style={[styles.card, !isDark && styles.cardLight]}>
          <Text style={[styles.cardTitle, !isDark && styles.cardTitleLight]}>Purpose</Text>
          <Text style={[styles.cardText, !isDark && styles.cardTextLight]}>
            Movie Explorer is your gateway to discover trending movies using TMDB API. It fetches real-time movie data and presents it in an easy-to-browse format.
          </Text>
        </View>

        <View style={[styles.card, !isDark && styles.cardLight]}>
          <Text style={[styles.cardTitle, !isDark && styles.cardTitleLight]}>Tech Stack</Text>
          <Text style={[styles.cardText, !isDark && styles.cardTextLight]}>
            This app is built with React Native using functional components and hooks. It integrates TMDB's API to retrieve trending movie data and uses custom reusable components like MovieCard and NavRow.
          </Text>
        </View>

        <View style={[styles.card, !isDark && styles.cardLight]}>
          <Text style={[styles.cardTitle, !isDark && styles.cardTitleLight]}>Developer</Text>
          <Text style={[styles.cardText, !isDark && styles.cardTextLight]}>
            Created as a side project by a passionate developer learning React Native. First step in building dynamic and responsive mobile experiences.
          </Text>
        </View>

        <Text style={[styles.footer, !isDark && styles.footerLight]}>
          Made with passion for learning and sharing.{'\n\n'}- Developed by Shaikh Samee
        </Text>
      </ScrollView>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'left',
    paddingHorizontal: 15,
    marginVertical: 5,
    marginBottom: 12,
    backgroundColor: 'rgba(52, 124, 219, 0.2)',
    borderRadius: 12,
    paddingVertical: 14,
  },
  headingLight: {
    backgroundColor: 'rgb(83, 151, 239)',
    color: '#F8F8F8',
  },
  card: {
    backgroundColor: 'rgba(72, 72, 72, 0.88)',
    borderColor: '#3b82f6',
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginVertical: 10,
  },
  cardLight: {
    backgroundColor: 'rgba(30, 64, 175, 0.15)', // soft blue for light mode
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#e0e0e0',
    marginBottom: 6,
  },
  cardTitleLight: {
    color: '#1e293b',
  },
  cardText: {
    fontSize: 14,
    color: '#d1d5db',
    lineHeight: 23,
    fontWeight: '300',
  },
  cardTextLight: {
    color: '#1e293b',
  },
  footer: {
    textAlign: 'center',
    margin: 30,
    fontSize: 12,
    color: '#94a3b8',
  },
  footerLight: {
    color: '#334155',
  },
});

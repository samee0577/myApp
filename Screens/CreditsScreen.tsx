import { StyleSheet, Text, View, ScrollView, useColorScheme } from 'react-native';
import React from 'react';
import NavRow from '../components/navRow';

const CreditsScreen = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={{ flex: 1 }}>
      <NavRow />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[styles.heading, !isDark && styles.headingLight]}>
          - Credits & Acknowledgments
        </Text>

        <View style={[styles.card, !isDark && styles.cardLight]}>
          <Text style={[styles.cardTitle, !isDark && styles.cardTitleLight]}>TMDB API</Text>
          <Text style={[styles.cardText, !isDark && styles.cardTextLight]}>
            Huge thanks to The Movie Database (TMDB) for providing a powerful and free API to access trending movie data and more.
          </Text>
        </View>

        <View style={[styles.card, !isDark && styles.cardLight]}>
          <Text style={[styles.cardTitle, !isDark && styles.cardTitleLight]}>React Native</Text>
          <Text style={[styles.cardText, !isDark && styles.cardTextLight]}>
            Built using React Native, a flexible and robust framework for building native mobile apps using JavaScript and React.
          </Text>
        </View>

        <View style={[styles.card, !isDark && styles.cardLight]}>
          <Text style={[styles.cardTitle, !isDark && styles.cardTitleLight]}>Libraries & Tools</Text>
          <Text style={[styles.cardText, !isDark && styles.cardTextLight]}>
            This app uses libraries like React Navigation for routing and Tailwind-like styling approaches for a sleek UI.
          </Text>
        </View>

        <View style={[styles.card, !isDark && styles.cardLight]}>
          <Text style={[styles.cardTitle, !isDark && styles.cardTitleLight]}>Developer</Text>
          <Text style={[styles.cardText, !isDark && styles.cardTextLight]}>
            Created by a passionate developer eager to learn and build visually rich and user-friendly applications.
          </Text>
        </View>

        <Text style={[styles.footer, !isDark && styles.footerLight]}>
          Made with passion for learning and sharing.{'\n \n '} -Developed by Shaikh Samee
        </Text>
      </ScrollView>
    </View>
  );
};

export default CreditsScreen;

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
    backgroundColor: 'rgba(30, 64, 175, 0.15)',
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

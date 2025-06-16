import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import AboutScreen from './Screens/AboutScreen';
import CreditsScreen from './Screens/CreditsScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? '#1E2A45' : '#f8fafd';
  const headerBg = isDarkMode ? '#23272F' : '#347cdb';

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        contentStyle: { backgroundColor },
        headerStyle: { backgroundColor: headerBg },
        headerTintColor: 'white',
        headerTitleStyle: { color: 'white' },
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Credits" component={CreditsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

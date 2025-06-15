import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Contact: undefined;
};

// Replace 'any' with your actual navigator stack if needed
const NavRow = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.navRow}>
      <Pressable onPress={() => navigation.navigate('Home')} style={styles.navBtn}>
        <Text style={styles.navBtnText}>Home</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('About')} style={styles.navBtn}>
        <Text style={styles.navBtnText}>About</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Contact')} style={styles.navBtn}>
        <Text style={styles.navBtnText}>Contact</Text>
      </Pressable>
    </View>
  );
};

export default NavRow;

const styles = StyleSheet.create({
  navRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    alignItems: 'center',
    gap: 20,
  },
  navBtn: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 50,
    backgroundColor: 'rgba(52, 124, 219, 0.2)',
    borderWidth: 1,
    borderColor: '#347cdb',
  },
  navBtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
});

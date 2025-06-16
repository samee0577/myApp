import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavRow = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navRow}>
      <Pressable onPress={() => navigation.navigate('Home')} style={styles.navBtn}>
        <Text style={styles.navBtnText}>Home</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('About')} style={styles.navBtn}>
        <Text style={styles.navBtnText}>About</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Credits')} style={styles.navBtn}>
        <Text style={styles.navBtnText}>Credits</Text>
      </Pressable>
    </View>
  );
};

export default NavRow;

const styles = StyleSheet.create({
  navRow: {
    backgroundColor: '#181c24',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 12,
    gap: 10,
    paddingHorizontal:15,
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

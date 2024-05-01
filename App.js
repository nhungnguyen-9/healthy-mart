import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import BotTabNav from './navigation/BotTabNav';
import LoadingScreen from './screens/LoadingScreen';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <LoadingScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

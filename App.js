import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import HomeScreen from './screens/HomeScreen';
import BotTabNav from './navigation/BotTabNav';

export default function App() {
  return (
    <BotTabNav></BotTabNav>
    // <View>
    //   <HomeScreen />
    // </View>
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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import BotTabNav from './navigation/BotTabNav';
import LoadingScreen from './screens/LoadingScreen';

export default function App() {
  return (
    <LoadingScreen />
    // <BotTabNav></BotTabNav>
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

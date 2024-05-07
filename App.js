import "react-native-gesture-handler";
import LoadingScreen from "./screens/LoadingScreen";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <LoadingScreen />
    </Provider>
  );
}

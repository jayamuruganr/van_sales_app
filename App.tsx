
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigations';
import {
  Appbar,
  DefaultTheme,
  Provider,
  Surface,
  ThemeProvider,
} from "react-native-paper";

function App(): JSX.Element {

  return (
    <Provider theme={DefaultTheme}>
      <NavigationContainer>
        {<StackNavigator />}
      </NavigationContainer>
    </Provider>
  );
}


export default App;

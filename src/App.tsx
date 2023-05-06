import 'react-native-gesture-handler'
import React from 'react';
import { Provider } from 'react-redux'
import { AppNavigator } from './Navigators/AppNavigator'
import { store } from './Redux/Store'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
export default App;

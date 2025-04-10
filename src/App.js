import React from 'react';
import {SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStack from 'navigation/RootStack';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import store from 'redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}}>
          <RootStack />
          <Toast visibilityTime={3000} />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

import React from 'react';
import {PortalProvider} from '@gorhom/portal';
import {Platform, StatusBar as RNStatusBar} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import RootStack from 'navigation/RootStack';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import store from 'redux/store';
import {COLORS} from '@theme';
import {Block, StatusBar} from '@components';

const AppContent = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Block
      flex={1}
      paddingTop={Platform.OS === 'android' ? RNStatusBar.currentHeight : top}>
      <PortalProvider>
        <RootStack />
        <Toast visibilityTime={3000} />
      </PortalProvider>
    </Block>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppContent />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

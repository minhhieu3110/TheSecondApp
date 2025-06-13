import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {PortalProvider} from '@gorhom/portal';
import {Platform, StatusBar as RNStatusBar} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import RootStack from 'navigation/RootStack';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import store, {persistor} from 'redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Block, StatusBar} from '@components';
import {COLORS} from '@theme';

const AppContent = () => {
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
      <PersistGate persistor={persistor} loading={null}>
        <SafeAreaProvider>
          <AppContent />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

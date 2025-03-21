import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStack from 'navigation/RootStack';
import BottomTabContainer from 'navigation/BottomTabContainer';
import {COLORS} from '@theme';
import {PortalProvider} from '@gorhom/portal';
const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        {/* <BottomTabContainer /> */}
        {/* <PortalProvider> */}
        <RootStack />
        {/* </PortalProvider> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

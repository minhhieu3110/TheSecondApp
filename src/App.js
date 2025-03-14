import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStack from 'navigation/RootStack';
import BottomTabContainer from 'navigation/BottomTabContainer';
import {COLORS} from '@theme';
const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        {/* <BottomTabContainer /> */}
        <RootStack />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

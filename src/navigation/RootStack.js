import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigationRef';
import router from '@router';
import AuthContainer from './AuthContainer';
import BottomTabContainer from './BottomTabContainer';
import CommonContainer from './CommonContainer';
import IntroSAN from 'screens/Common/IntroSAN';

export default function MainStack() {
  const RootStack = createNativeStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="IntroSAN" component={IntroSAN} />
        <RootStack.Screen
          name={router.AUTH_CONTAINER}
          component={AuthContainer}
        />
        <RootStack.Screen
          name={router.BOTTOM_CONTAINER}
          component={BottomTabContainer}
        />

        <RootStack.Screen
          name={router.COMMON_CONTAINER}
          component={CommonContainer}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

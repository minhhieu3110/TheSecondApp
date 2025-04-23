import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigationRef';
import router from '@router';
import AuthContainer from './AuthContainer';
import BottomTabContainer from './BottomTabContainer';
import CommonContainer from './CommonContainer';
import TopTabContainerOrder from 'screens/Common/OrderOfYou/TopTabContainerOrder';
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
        {/* <RootStack.Screen
          name={router.TOP_CONTAINER}
          component={TopTabContainer}
        /> */}
        <RootStack.Screen
          name={router.TOP_ODER_CONTAINER}
          component={TopTabContainerOrder}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

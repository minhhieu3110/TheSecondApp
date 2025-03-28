import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {icon} from 'assets';
import router from '@router';
import {bottom} from 'screens/Bottom';
import {COLORS, FONTS} from '@theme';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, focused) => {
  switch (route.name) {
    case router.HOME_SCREEN:
      return focused ? icon.icon_home_focus : icon.icon_home;
    case router.ACTIVITY_SCREEN:
      return focused ? icon.icon_activity_focus : icon.icon_activity;
    case router.MESSAGE_SCREEN:
      return icon.icon_message;
    case router.NOTIFICATION_SCREEN:
      return focused ? icon.icon_notification_focus : icon.icon_notification;
    case router.PROFILE_SCREEN:
      return focused ? icon.icon_profile_focus : icon.icon_profile;
    default:
      return null;
  }
};
const screenOptions = ({route, navigation}) => {
  const currentRoute = navigation
    .getState()
    .routes.find(r => r.name === route.name);

  const isInitialRoute =
    currentRoute && currentRoute.state ? currentRoute.state.index === 0 : true;

  return {
    headerShown: false,
    tabBarStyle: {
      display: isInitialRoute ? 'flex' : 'none',
      height: 81.65,
      paddingBottom: 8,
      paddingTop: 9,
    },
    tabBarIcon: ({focused}) => (
      <Image
        source={getTabBarIcon(route, focused)}
        style={{width: 28, height: 28}}
      />
    ),
    tabBarLabelStyle: {
      fontSize: 12,
      fontFamily: FONTS.regular,
    },
    tabBarActiveTintColor: COLORS.red4,
    tabBarInactiveTintColor: COLORS.black1,
  };
};
const tabs = [
  {name: router.HOME_SCREEN, label: 'Trang Chủ'},
  {
    name: router.ACTIVITY_SCREEN,
    label: 'Hoạt động',
  },
  {name: router.MESSAGE_SCREEN, label: ''},
  {name: router.NOTIFICATION_SCREEN, label: 'Thông báo'},
  {name: router.PROFILE_SCREEN, label: 'Tài Khoản'},
];
export default function BottomTabContainer() {
  return (
    <Tab.Navigator
      initialRouteName={router.HOME_SCREEN}
      screenOptions={screenOptions}>
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={bottom[tab.name]}
          options={{tabBarLabel: tab.label}}
        />
      ))}
    </Tab.Navigator>
  );
}

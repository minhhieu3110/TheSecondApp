import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {icon} from 'assets';
import router from '@router';
import {bottom} from 'screens/Bottom';
import {COLORS, FONTS} from '@theme';
import {Block} from '@components';

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
const screenOptions = ({route}) => {
  return {
    headerShown: false,
    tabBarStyle: {
      height: 81.65,
      elevation: 10,
      shadowOpacity: 0.1,
      shadowRadius: 10,
      shadowColor: '#000',
      shadowOffset: {height: -5, width: 0},
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
    tabBarItemStyle: {width: 54, height: 50, marginTop: 23.8},
  };
};

export default function BottomTabContainer() {
  return (
    <Tab.Navigator
      initialRouteName={router.HOME_SCREEN}
      screenOptions={screenOptions}>
      <Tab.Screen
        name={router.HOME_SCREEN}
        component={bottom[router.HOME_SCREEN]}
        options={{tabBarLabel: 'Trang chủ'}}
      />
      <Tab.Screen
        name={router.ACTIVITY_SCREEN}
        component={bottom[router.ACTIVITY_SCREEN]}
        options={{tabBarLabel: 'Hoạt động'}}
      />
      <Tab.Screen
        name={router.MESSAGE_SCREEN}
        component={bottom[router.MESSAGE_SCREEN]}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Block
              width={70}
              height={70}
              radius={50}
              absolute
              bottom={10}
              alignCenter
              justifyCenter
              backgroundColor={COLORS.white}>
              <Image source={icon.icon_message} width={53.93} height={53.93} />
            </Block>
          ),
        }}
      />
      <Tab.Screen
        name={router.NOTIFICATION_SCREEN}
        component={bottom[router.NOTIFICATION_SCREEN]}
        options={{tabBarLabel: 'Thông báo'}}
      />
      <Tab.Screen
        name={router.PROFILE_SCREEN}
        component={bottom[router.PROFILE_SCREEN]}
        options={{tabBarLabel: 'Tài khoản'}}
      />
    </Tab.Navigator>
  );
}

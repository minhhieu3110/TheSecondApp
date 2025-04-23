import {Block, Text, Pressable} from '@components';
import {width} from '@responsive';
import {COLORS, FONTS} from '@theme';
import {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import router from '@router';
import {top} from 'screens/Bottom/ActivityScreen/common/top';
export default function ActivityScreen({route}) {
  console.log(route?.params?.activity);

  const tabs = [
    {name: router.NEW_ACTIVITY, lable: 'Mới'},
    {name: router.RECEPTION, lable: 'Tiếp nhận'},
    {name: router.DOING, lable: 'Đang làm'},
    {name: router.COMPLETE, lable: 'Hoàn thành'},
    {name: router.CANCEL, lable: 'Huỷ'},
  ];
  const Tab = createMaterialTopTabNavigator();
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block width={width} backgroundColor={COLORS.white}>
        <Text
          marginTop={20}
          marginLeft={12}
          fontSize={15}
          semiBold
          color={COLORS.black2}>
          Hoạt động
        </Text>
      </Block>
      <Tab.Navigator
        // initialRouteName={'router.DOING'}
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily: FONTS.regular,
            includeFontPadding: 0,
            marginTop: -20,
          },
          tabBarItemStyle: {
            width: 120,
            height: 30,
          },
          tabBarIndicatorStyle: {
            backgroundColor: COLORS.red4,
            height: 2,
            marginLeft: 12,
            marginTop: 13,
          },
          tabBarActiveTintColor: COLORS.red4,
          tabBarInactiveTintColor: COLORS.black1,
          tabBarStyle: {
            paddingHorizontal: 12,
          },
          tabBarContentContainerStyle: {
            height: 35,
            marginTop: 28,
          },
          tabBarScrollEnabled: true,
        }}>
        {tabs.map(tab => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={top[tab.name]}
            options={{tabBarLabel: tab.lable}}
          />
        ))}
      </Tab.Navigator>
    </Block>
  );
}

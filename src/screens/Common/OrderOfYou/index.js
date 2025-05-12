import {Block, HeaderTitle} from '@components';
import router from '@router';
import {COLORS, FONTS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewOrder from './common/NewOrder';
export default function OrderOfYou({route}) {
  // const TopOrderStack = createNativeStackNavigator();
  const Tab = createMaterialTopTabNavigator();
  const tabs = [
    {name: router.NEW_ORDER, lable: 'Mới'},
    {name: router.CONFIRM_ORDER, lable: 'Xác nhận'},
    {name: router.SHIPPING, lable: 'Đang giao'},
    {name: router.COMPLETE_SHIP_ORDER, lable: 'Đã giao'},
    {name: router.CANCEL_ORDER, lable: 'Đã huỷ'},
  ];
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle
        root={commonRoot}
        screenName={router.SHOPPING}
        title={'Đơn hàng của bạn'}
      />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily: FONTS.regular,
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
          },
          tabBarScrollEnabled: true,
        }}>
        <Tab.Screen
          name="NEW_ORDER"
          component={NewOrder}
          options={{tabBarLabel: 'Mới'}}
        />
        <Tab.Screen
          name="CONFIRM_ORDER"
          component={NewOrder}
          options={{tabBarLabel: 'Xác nhận'}}
        />
        <Tab.Screen
          name="SHIPPING"
          component={NewOrder}
          options={{tabBarLabel: 'Đang giao'}}
        />
        <Tab.Screen
          name="COMPLETE_SHIP_ORDER"
          component={NewOrder}
          options={{tabBarLabel: 'Đã giao'}}
        />
        <Tab.Screen
          name="CANCEL_ORDER"
          component={NewOrder}
          options={{tabBarLabel: 'Đã huỷ'}}
        />
      </Tab.Navigator>
    </Block>
  );
}

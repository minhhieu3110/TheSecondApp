import {Block, HeaderTitle, StatusBar} from '@components';
import router from '@router';
import {COLORS, FONTS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewOrder from './common/NewOrder';
import ConfirmOrder from './common/ConfirmOrder';
import Shipping from './common/Shipping';
import CompleteShipOrder from './common/CompleteShipOder';
import CancelOrder from './common/CancelOrder';
export default function OrderOfYou({route}) {
  // const TopOrderStack = createNativeStackNavigator();
  const Tab = createMaterialTopTabNavigator();
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
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
          component={ConfirmOrder}
          options={{tabBarLabel: 'Xác nhận'}}
        />
        <Tab.Screen
          name="SHIPPING"
          component={Shipping}
          options={{tabBarLabel: 'Đang giao'}}
        />
        <Tab.Screen
          name="COMPLETE_SHIP_ORDER"
          component={CompleteShipOrder}
          options={{tabBarLabel: 'Đã giao'}}
        />
        <Tab.Screen
          name="CANCEL_ORDER"
          component={CancelOrder}
          options={{tabBarLabel: 'Đã huỷ'}}
        />
      </Tab.Navigator>
    </Block>
  );
}

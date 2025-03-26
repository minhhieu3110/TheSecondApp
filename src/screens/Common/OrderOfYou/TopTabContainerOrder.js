import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import router from '@router';
import {top} from 'screens/Bottom/ActivityScreen/common/top';
import {height, width} from '@responsive';
import {FONTS, COLORS} from '@theme';
import {commonOrder} from './common';
import {common} from '..';
import {useState, useEffect} from 'react';
const tabs = [
  {name: router.NEW_ORDER, lable: 'Mới'},
  {name: router.CONFIRM_ORDER, lable: 'Xác nhận'},
  {name: router.SHIPPING, lable: 'Đang giao'},
  {name: router.COMPLETE_SHIP_ORDER, lable: 'Đã giao'},
  {name: router.CANCEL_ORDER, lable: 'Đã huỷ'},
];
const Tab = createMaterialTopTabNavigator();
export default function TopTabContainerOrder({route}) {
  const [selectedTab, setSelectedTab] = useState(null);
  useEffect(() => {
    if (route.params?.orderStatus) {
      setSelectedTab(route.params?.orderStatus);
    }
  });

  console.log(selectedTab);

  return (
    <Tab.Navigator
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
        },
        tabBarScrollEnabled: true,
      }}>
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={commonOrder[tab.name]}
          options={{tabBarLabel: tab.lable}}
        />
      ))}
    </Tab.Navigator>
  );
}

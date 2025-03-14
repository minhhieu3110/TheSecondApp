import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import router from '@router';
import {top} from 'screens/Bottom/ActivityScreen/common/top';
import {height, width} from '@responsive';
import {FONTS, COLORS} from '@theme';
const screenOption = {};
const tabs = [
  {name: router.NEW_ACTIVITY, lable: 'Mới   '},
  {name: router.RECEPTION, lable: 'Tiếp nhận'},
  {name: router.DOING, lable: 'Đang làm'},
  {name: router.COMPLETE, lable: 'Hoàn thành'},
  {name: router.CANCEL, lable: 'Huỷ'},
];
const Tab = createMaterialTopTabNavigator();
export default function TopTabContainer() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 15,
          fontFamily: FONTS.regular,
          includeFontPadding: 0,
          marginBottom: 13,
        },
        tabBarItemStyle: {
          width: (width - 24) / 4,
          height: 30,
          paddingTop: 0,
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
  );
}

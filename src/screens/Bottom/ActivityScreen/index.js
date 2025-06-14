import {Block, Text, Pressable, Image, StatusBar} from '@components';
import {width} from '@responsive';
import {COLORS, FONTS} from '@theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import router from '@router';
import NewActivity from './common/NewActivity';
import Reception from './common/Reception';
import Doing from './common/Doing';
import Complete from './common/Complete';
import Cancel from './common/Cancel';
import {icon} from '@assets';
import {commonRoot} from 'navigation/navigationRef';
export default function ActivityScreen({route}) {
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
      <StatusBar />
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
      <Pressable
        onPress={() => commonRoot.navigate(router.REPEAT_SERVICE)}
        absolute
        top={17.9}
        right={12}
        width={67.2}
        height={18}
        rowCenter
        spaceBetween>
        <Image source={icon.icon_repeat} width={22.2} height={18} />
        <Text fontSize={12} regular color={COLORS.darkRed1}>
          Lặp lại
        </Text>
      </Pressable>
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
            marginTop: 28,
          },
          tabBarScrollEnabled: true,
        }}>
        <Tab.Screen
          name="NEW_ACTIVITY"
          component={NewActivity}
          options={{tabBarLabel: 'Mới'}}
        />
        <Tab.Screen
          name="RECEPTION"
          component={Reception}
          options={{tabBarLabel: 'Tiếp nhận'}}
        />
        <Tab.Screen
          name="DOING"
          component={Doing}
          options={{tabBarLabel: 'Đang làm'}}
        />
        <Tab.Screen
          name="COMPLETE"
          component={Complete}
          options={{tabBarLabel: 'Hoàn thành'}}
        />
        <Tab.Screen
          name="CANCEL"
          component={Cancel}
          options={{tabBarLabel: 'Huỷ'}}
        />
      </Tab.Navigator>
    </Block>
  );
}

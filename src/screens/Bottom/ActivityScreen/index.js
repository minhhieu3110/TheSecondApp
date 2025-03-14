import {Block, Text, Pressable} from '@components';
import {width} from '@responsive';
import {COLORS, FONTS} from '@theme';
import {useState} from 'react';
import NewActivity from './common/NewActivity';
import {ScrollView} from 'react-native';
import Reception from './common/Reception';
import Doing from './common/Doing';
import TopTabContainer from 'navigation/TopTabContainer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export default function ActivityScreen() {
  const TopStack = createNativeStackNavigator();
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
      <TopStack.Navigator
        initialRouteName="TopTabContainer"
        screenOptions={{headerShown: false}}>
        <TopStack.Screen name="TopTabContainer" component={TopTabContainer} />
      </TopStack.Navigator>
    </Block>
  );
}

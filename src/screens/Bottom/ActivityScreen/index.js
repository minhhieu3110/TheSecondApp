import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {
  Block,
  Text,
  Pressable,
  Image,
  StatusBar,
  ScrollView,
} from '@components';
import {width} from '@responsive';
import {COLORS, FONTS} from '@theme';
import {icon} from '@assets';
import router from '@router';
import {commonRoot} from 'navigation/navigationRef';

import NewActivity from './common/NewActivity';
import Reception from './common/Reception';
import Doing from './common/Doing';
import Complete from './common/Complete';
import Cancel from './common/Cancel';

const tabRoutes = [
  {key: 'NEW_ACTIVITY', title: 'Mới', component: NewActivity},
  {key: 'RECEPTION', title: 'Tiếp nhận', component: Reception},
  {key: 'DOING', title: 'Đang làm', component: Doing},
  {key: 'COMPLETE', title: 'Hoàn thành', component: Complete},
  {key: 'CANCEL', title: 'Huỷ', component: Cancel},
];

const tabKeyToIndex = tabRoutes.reduce((acc, item, idx) => {
  acc[item.key] = idx;
  return acc;
}, {});

const renderScene = SceneMap(
  tabRoutes.reduce((acc, tab) => {
    acc[tab.key] = tab.component;
    return acc;
  }, {}),
);

export default function ActivityScreen({route}) {
  const tabParam = route.params?.tab || 'NEW_ACTIVITY';
  const initialIndex = tabKeyToIndex[tabParam] || 0;

  const [index, setIndex] = useState(initialIndex);
  const [routes] = useState(tabRoutes);

  useEffect(() => {
    if (tabParam && tabKeyToIndex[tabParam] !== undefined) {
      setIndex(tabKeyToIndex[tabParam]);
    }
  }, [tabParam]);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <Block width={width} backgroundColor={COLORS.white} height={63} gap={28}>
        <Block rowCenter spaceBetween marginTop={20} marginHorizontal={12}>
          <Text fontSize={15} semiBold color={COLORS.black2}>
            Hoạt động
          </Text>
          <Pressable
            onPress={() => commonRoot.navigate(router.REPEAT_SERVICE)}
            paddingHorizontal={12}
            paddingVertical={5}
            radius={17}
            rowCenter
            gap={10}
            backgroundColor={COLORS.pinkWhite2}>
            <Image source={icon.icon_repeat} width={22.2} height={18} />
            <Text fontSize={12} regular color={COLORS.darkRed1}>
              Lặp lại
            </Text>
          </Pressable>
        </Block>
      </Block>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: Dimensions.get('window').width}}
        renderTabBar={props => (
          <Block backgroundColor={COLORS.white}>
            <Block marginHorizontal={12}>
              <ScrollView horizontal>
                {props.navigationState.routes.map((route, i) => {
                  const isFocused = index === i;
                  return (
                    <Pressable
                      key={route.key}
                      onPress={() => setIndex(i)}
                      width={(width - 24) / 4}
                      height={30}
                      alignCenter
                      borderBottomWidth={isFocused ? 2 : 0}
                      borderColor={COLORS.red4}>
                      <Text
                        fontSize={15}
                        regular
                        color={isFocused ? COLORS.red4 : COLORS.black1}>
                        {route.title}
                      </Text>
                    </Pressable>
                  );
                })}
              </ScrollView>
            </Block>
          </Block>
        )}
      />
    </Block>
  );
}

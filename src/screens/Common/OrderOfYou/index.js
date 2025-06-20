import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Block, HeaderTitle, StatusBar, Text, Pressable} from '@components';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {width} from '@responsive';

import NewOrder from './common/NewOrder';
import ConfirmOrder from './common/ConfirmOrder';
import Shipping from './common/Shipping';
import CompleteShipOrder from './common/CompleteShipOder';
import CancelOrder from './common/CancelOrder';

const tabRoutes = [
  {key: 'NEW_ORDER', title: 'Mới', component: NewOrder},
  {key: 'CONFIRM_ORDER', title: 'Xác nhận', component: ConfirmOrder},
  {key: 'SHIPPING', title: 'Đang giao', component: Shipping},
  {key: 'COMPLETE_SHIP_ORDER', title: 'Đã giao', component: CompleteShipOrder},
  {key: 'CANCEL_ORDER', title: 'Đã huỷ', component: CancelOrder},
];

const tabKeyToIndex = tabRoutes.reduce((acc, tab, i) => {
  acc[tab.key] = i;
  return acc;
}, {});

const renderScene = SceneMap(
  tabRoutes.reduce((acc, tab) => {
    acc[tab.key] = tab.component;
    return acc;
  }, {}),
);

export default function OrderOfYou({route}) {
  const tabParam = route.params?.tab || 'NEW_ORDER';
  const initialIndex = tabKeyToIndex[tabParam] || 0;

  const [index, setIndex] = useState(initialIndex);
  const [routes] = useState(tabRoutes);

  const scrollRef = useRef(null);
  const tabRefs = useRef([]);

  useEffect(() => {
    if (tabParam && tabKeyToIndex[tabParam] !== undefined) {
      setIndex(tabKeyToIndex[tabParam]);
    }
  }, [tabParam]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ref = tabRefs.current[index];
      if (ref && scrollRef.current) {
        ref.measureLayout(
          scrollRef.current,
          (x, y, w) => {
            const screenWidth = width;
            const scrollX =
              x + w > screenWidth ? x + w - screenWidth + 240 : x - 12;
            scrollRef.current.scrollTo({
              x: scrollX > 0 ? scrollX : 0,
              animated: true,
            });
          },
          () => {},
        );
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <HeaderTitle
        height={63}
        root={commonRoot}
        screenName={router.SHOPPING}
        title="Đơn hàng của bạn"
      />

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: Dimensions.get('window').width}}
        renderTabBar={props => (
          <Block backgroundColor={COLORS.white}>
            <ScrollView
              ref={scrollRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingHorizontal: 12}}>
              {props.navigationState.routes.map((route, i) => {
                const isFocused = index === i;
                return (
                  <Pressable
                    key={route.key}
                    ref={el => (tabRefs.current[i] = el)}
                    onPress={() => setIndex(i)}
                    borderBottomWidth={isFocused ? 2 : 0}
                    height={30}
                    width={(width - 24) / 4}
                    alignCenter
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
        )}
      />
    </Block>
  );
}

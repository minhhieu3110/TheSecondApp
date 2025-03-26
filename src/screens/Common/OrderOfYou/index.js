import {Block, HeaderTitle} from '@components';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TopTabContainerOrder from './TopTabContainerOrder';
import {useEffect, useState} from 'react';

export default function OrderOfYou({route}) {
  const [name, setName] = useState(null);

  useEffect(() => {
    if (route.params?.name) {
      setName(route.params?.name);
    }
  }, [route.params?.name]);
  // console.log(name);

  const TopOrderStack = createNativeStackNavigator();

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle
        root={commonRoot}
        screenName={router.SHOPPING}
        title={'Đơn hàng của bạn'}
      />
      <TopOrderStack.Navigator
        initialRouteName="TopTabContainerOrder"
        screenOptions={{headerShown: false}}>
        <TopOrderStack.Screen
          name="TopTabContainerOrder"
          component={TopTabContainerOrder}
          initialParams={{orderStatus: name}}
        />
      </TopOrderStack.Navigator>
    </Block>
  );
}

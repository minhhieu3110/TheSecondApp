import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {common} from 'screens/Common';
import router from '@router';

const CommonStack = createNativeStackNavigator();

const commonStack = [{name: router.VOUCHER}];

export default function CommonContainer() {
  return (
    <CommonStack.Navigator
      initialRouteName={router.PAY}
      screenOptions={{headerShown: false}}>
      {commonStack.map(stack => (
        <CommonStack.Screen
          key={stack.name}
          name={stack.name}
          component={common[stack.name]}
        />
      ))}
    </CommonStack.Navigator>
  );
}

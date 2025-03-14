import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {common} from 'screens/Common';
import router from '@router';

const CommonStack = createNativeStackNavigator();

const commonStack = [
  {name: router.VOUCHER},
  {name: router.DETAIL_VOUCHER},
  {name: router.FAVORITE_STAFF},
  {name: router.ADD_STAFF},
  {name: router.PROFILE_STAFF},
  {name: router.BALANCE},
  {name: router.RECHARGE},
  {name: router.INFO_RECHARGE},
  {name: router.WITHDRAW},
  {name: router.HISTORY},
  {name: router.ACCUMULATED_POINT},
  {name: router.ADDRESS},
  {name: router.ADD_NEW_ADDRESS},
  {name: router.MENBERSHIP_RANK},
  {name: router.HISTORY_POINT},
  {name: router.ACCOUNT},
  {name: router.REFER_FRIEND},
  {name: router.BLOCK_STAFF},
  {name: router.ADD_BLOCK_STAFF},
  {name: router.PROFILE_STAFF_BLOCKED},
  {name: router.HELP},
];

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

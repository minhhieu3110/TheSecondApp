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
  {name: router.THEQUESTION},
  {name: router.TERMS_OF_USE},
  {name: router.PRIVACY_SECURITY},
  {name: router.SETTING},
  {name: router.FEEDBACK},
  {name: router.ABOUT},
  {name: router.INTRODUCE_SAN},
  {name: router.DETAIL_NEW_ACTIVITY},
  {name: router.DETAIL_RECEPTION},
  {name: router.DETAIL_DOING},
  {name: router.DETAIL_COMPLETE},
  {name: router.EVALUATE_SERVICE},
  {name: router.DETAIL_CANCEL},
  {name: router.CARE_ELEDERLY},
  {name: router.CARE_SICKER},
  {name: router.PHYSICAL_THERAPY},
  {name: router.HOUSEWORK},
  {name: router.ELEDERLY_SERVICE_DURATION_DAY},
  {name: router.ELEDERLY_CONFIRM_PAY},
  {name: router.ELEDERLY_SERVICE_DURATION_MONTH},
  {name: router.ELEDERLY_CONFIRM_PAY_MONTH},

  {name: router.SICKER_SERVICE_DURATION_DAY},
  {name: router.SICKER_CONFIRM_PAY},
  {name: router.SICKER_SERVICE_DURATION_MONTH},
  {name: router.SICKER_CONFIRM_PAY_MONTH},

  {name: router.CHOOSE_TIME_PHYSICAL_THERAPY},
  {name: router.PHYSICAL_THERAPY_CONFIRM_AND_PAY},

  {name: router.HOUSEWORK_ODD_SHIFT},
  {name: router.HOUSEWORK_ODD_SHIFT_CONFIRM_AND_PAY},

  {name: router.HOUSEWORK_MONTH},
  {name: router.HOUSEWORK_MONTH_CONFIRM_AND_PAY},

  {name: router.DETAIL_MESSAGE},

  {name: router.SHOPPING},
  {name: router.ALL_CATEGORY},
  {name: router.PRODUCT_OF_CATEGORY},
  {name: router.CART},
  {name: router.PAY_SHOPPING},
  {name: router.ORDER_OF_YOU},
  {name: router.DETAIL_PRODUCT},
  {name: router.EVALUATE_PRODUCT},
  {name: router.DETAIL_NEW_ORDER},
  {name: router.DETAIL_CONFIRM_ORDER},
  {name: router.DETAIL_SHIPPING},
  {name: router.DETAIL_COMPLETE_ORDER},
  {name: router.DETAIL_CANCEL_ORDER},
  {name: router.EVALUATE_ORDER},
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

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
  {name: router.PROFILE_EMPLOYEE},
  {name: router.BALANCE},
  {name: router.RECHARGE},
  {name: router.INFO_RECHARGE},
  {name: router.WITHDRAW},
  {name: router.HISTORY},
  {name: router.ACCUMULATED_POINT},
  {name: router.ADDRESS},
  {name: router.ADD_NEW_ADDRESS},
  {name: router.UPDATE_ADDRESS},
  {name: router.MENBERSHIP_RANK},
  {name: router.HISTORY_POINT},
  {name: router.ACCOUNT},
  {name: router.REFER_FRIEND},
  {name: router.BLOCK_STAFF},
  {name: router.ADD_BLOCK_STAFF},
  {name: router.HELP},
  {name: router.THEQUESTION},
  {name: router.TERMS_OF_USE},
  {name: router.PRIVACY_SECURITY},
  {name: router.SETTING},
  {name: router.FEEDBACK},
  {name: router.HISTORY_FEEDBACK},
  {name: router.ABOUT},
  {name: router.INTRODUCE_SAN},
  //
  {name: router.DETAIL_SERVICE},
  //

  {name: router.EVALUATE_SERVICE},

  {name: router.CHOOSE_SERVICE},
  {name: router.CHOOSE_TIME_FOR_SERVICE},
  {name: router.CARE_ELEDERLY},
  {name: router.CARE_SICKER},
  {name: router.PHYSICAL_THERAPY},
  {name: router.HOUSEWORK},
  {name: router.ELEDERLY_SERVICE_DURATION_DAY},
  {name: router.ELEDERLY_SERVICE_DURATION_MONTH},

  {name: router.SICKER_SERVICE_DURATION_DAY},
  {name: router.SICKER_SERVICE_DURATION_MONTH},

  {name: router.HOUSEWORK_ODD_SHIFT},

  {name: router.HOUSEWORK_MONTH},
  //chung
  {name: router.SELECT_DAY_WORKING},
  {name: router.CONFIRM_AND_PAY_SERVICE},
  {name: router.CONFIRM_AND_SIGNUP_PACKAGE},
  //
  {name: router.DETAIL_MESSAGE},

  {name: router.SHOPPING},
  {name: router.ALL_CATEGORY},
  {name: router.PRODUCT_OF_CATEGORY},
  {name: router.CART},
  {name: router.PAY_SHOPPING},
  {name: router.ORDER_OF_YOU},
  {name: router.DETAIL_PRODUCT},
  {name: router.EVALUATE_PRODUCT},
  {name: router.DETAIL_ORDER},

  {name: router.EVALUATE_ORDER},
  {name: router.DETAIL_NOTIFICATION},
  {name: router.EXCHANGE_POINT},
  {name: router.DETAIL_EXCHANGE_VOUCHER},
  {name: router.REPEAT_SERVICE},
  {name: router.DETAIL_REPEAT_SERVICE},
  {name: router.ALL_PROMO},
  {name: router.DETAIL_PROMO},
  {name: router.ALL_NEWS},
  {name: router.DETAIL_NEW},
  {name: router.ADD_BANK_ACCOUNT},
  {name: router.PRIVACY_SECURITY_ONBOARDING},
  {name: router.TERMS_OF_USE_ONBOARDING},
];

export default function CommonContainer() {
  return (
    <CommonStack.Navigator screenOptions={{headerShown: false}}>
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

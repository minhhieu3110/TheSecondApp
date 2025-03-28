import {createNativeStackNavigator} from '@react-navigation/native-stack';
import router from '@router';
import {auth} from 'screens/Auth';
import React from 'react';
const AuthStack = createNativeStackNavigator();
const authStack = [
  {name: router.ONBOARDING_SCREEN},
  {name: router.LOGIN_SCREEN},
  {name: router.INPUT_OTP},
  {name: router.INPUT_INFORMATION},
];
export default function AuthContainer() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      {authStack.map(stack => (
        <AuthStack.Screen
          key={stack.name}
          name={stack.name}
          component={auth[stack.name]}
        />
      ))}
    </AuthStack.Navigator>
  );
}

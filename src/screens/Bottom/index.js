import router from '@router';
import HomeScreen from './HomeScreen';
import ActivityScreen from './ActivityScreen';
import MessageScreen from './MessageScreen';
import NotificationScreen from './NotificationScreen';
import ProfileScreen from './ProfileScreen';
export const bottom = {
  [router.HOME_SCREEN]: HomeScreen,
  [router.ACTIVITY_SCREEN]: ActivityScreen,
  [router.MESSAGE_SCREEN]: MessageScreen,
  [router.NOTIFICATION_SCREEN]: NotificationScreen,
  [router.PROFILE_SCREEN]: ProfileScreen,
};

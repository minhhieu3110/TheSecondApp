import {useFCMMessage} from '@hooks';
import {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@redux/actions';
import moment from 'moment';
import PushNotification, {Importance} from 'react-native-push-notification';
import {COLORS} from '@theme';
import {icons} from '@assets';
import {commonRoot} from '@navigation/navigationRef';
import {Platform} from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import router from '@navigation/router';

export default function useNotificationMessage() {
  const message = useFCMMessage(true);
  const appToken = useSelector(state => state.appToken.data);

  const userToken = useSelector(state => state.user?.userToken);
  const dispatch = useDispatch();

  PushNotification.createChannel({
    channelId: 'transaction_notification',
    channelName: 'Giao dịch',
    playSound: false,
    soundName: 'default',
    importance: Importance.HIGH,
    vibrate: true,
  });

  PushNotification.configure({
    onNotification: data => {
      if (Platform.OS === 'ios') {
        if (message?.data?.url === 'ORDER_DETAIL_SCREEN') {
          dispatch({
            type: actions.GET_ORDER_DETAIL,
            params: {
              order_id: message?.data?.item_id,
            },
          });
        }
        commonRoot.navigate(message?.data?.url, {
          id: message?.data?.item_id,
        });
      } else {
        const dataMessage = Object.keys(data?.data).length > 0 ? data : message;
        if (dataMessage?.data?.url === 'ORDER_DETAIL_SCREEN') {
          commonRoot.navigate(dataMessage?.data?.url, {
            id: dataMessage?.data?.item_id,
          });
        } else if (dataMessage?.data?.url === 'ROOM_CHAT_SCREEN') {
          dispatch({
            type: actions.GET_INFO_STORE,
            params: {department_id: dataMessage?.data?.department_id},
            onSuccess: res => {
              commonRoot.navigate(dataMessage?.data?.url, {
                id: dataMessage?.data?.item_id,
                department: res,
              });
            },
          });
        } else {
          commonRoot.navigate(dataMessage?.data?.url, {
            id: dataMessage?.data?.item_id,
          });
        }
      }
    },
  });

  useEffect(() => {
    if (
      userToken &&
      message &&
      appToken &&
      !message.from.startsWith('/topics/')
    ) {
      // if (Platform.OS === 'ios') {
      //   PushNotificationIOS.addNotificationRequest({
      //     id: message?.messageId,
      //     body: message?.notification?.body,
      //     title: message?.notification?.title,
      //     sound: 'default',
      //   });
      // } else {
      //   PushNotification.localNotification({
      //     channelId: 'transaction_notification',
      //     title: message?.notification?.title,
      //     message: message?.notification?.body,
      //     showWhen: true,
      //     autoCancel: true,
      //     vibrate: true,
      //     playSound: true,
      //     soundName: 'default',
      //     smallIcon: icons.ic_load,
      //     largeIcon: 'icon_app_round',
      //     color: COLORS.red6,
      //     when: moment().valueOf(),
      //   });
      // }
      // dispatch({
      //   type: actions.GET_ORDER_DETAIL,
      //   params: {
      //     order_id: message?.data?.item_id,
      //   },
      // });
      dispatch({type: actions.GET_USER});
      dispatch({
        type: actions.GET_PLUS_COIN,
        params: {
          numshow: 5,
        },
      });
      dispatch({
        type: actions.GET_ALL_COIN,
        params: {
          numshow: 5,
        },
      });
      dispatch({
        type: actions.GET_ALL_POINT,
        params: {
          numshow: 5,
        },
      });
      dispatch({
        type: actions.GET_BUY_POINT,
        params: {
          numshow: 5,
        },
      });
      dispatch({
        type: actions.GET_OUSER_POINT,
        params: {
          numshow: 5,
        },
      });
      dispatch({
        type: actions.GET_ALL_NOTIFICATION,
      });
      dispatch({type: actions.GET_ORDER_STATUS});
    }
  }, [message?.messageId, appToken]);
}

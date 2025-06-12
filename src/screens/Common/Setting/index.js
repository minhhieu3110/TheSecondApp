import actions from '@actions';
import {Block, HeaderTitle, Text, Switch} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {root} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
export default function Setting() {
  const dispatch = useDispatch();

  const userInfo = useSelector(state => state.getUserInfo?.data || []);
  const [allowNotification, setAllowNotification] = useState(
    userInfo?.allow_notifications === 1 ? true : false,
  );
  useEffect(() => {
    setAllowNotification(userInfo?.allow_notifications === 1);
  }, [userInfo?.allow_notifications]);

  const onToggleNotification = value => {
    setAllowNotification(value);
    dispatch({
      type: actions.UPDATE_USER_INFO,
      body: {allow_notifications: value ? 1 : 0},
      onSuccess: res => {
        if (res?.message) {
          Toast.show({
            type: 'success',
            text1: res,
          });
        }
      },
      onFail: error => {
        Toast.show({
          type: 'success',
          text1: 'Cập nhật thông tin thành công',
        });
        dispatch({type: actions.GET_USER_INFO});
      },
    });
  };

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Cài đặt'} canGoBack />
      <Block marginTop={15} marginLeft={12} width={width - 24}>
        <Block
          marginBottom={12}
          paddingHorizontal={12}
          paddingVertical={12}
          backgroundColor={COLORS.white}
          radius={8}>
          <Block width={width - 48} row alignCenter>
            <Text fontSize={15} regular color={COLORS.black1}>
              Thông báo
            </Text>
            <Block absolute right={0} width={46} height={23}>
              <Switch
                value={allowNotification}
                onValueChange={onToggleNotification}
                trackColor={{false: COLORS.grayWhite, true: COLORS.green6}}
                thumbColor={{false: COLORS.white, true: COLORS.white}}
                width={46}
                height={23}
                thumbSize={19}
              />
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

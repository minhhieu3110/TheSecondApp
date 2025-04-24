import actions from '@actions';
import {Block, HeaderTitle, Text, Switch} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
export default function Setting() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: actions.GET_USER_INFO,
    });
  }, [dispatch]);
  const userInfo = useSelector(state => state.getUserInfo?.data || []);
  const [allowNotification, setAllowNotification] = useState(
    userInfo?.allow_notifications ?? true,
  );
  useEffect(() => {
    if (typeof userInfo?.allow_notifications !== 'undefined') {
      setAllowNotification(userInfo.allow_notifications);
    }
  }, [userInfo?.allow_notifications]);
  const handleNotificationToggle = value => {
    setAllowNotification(value);
    dispatch({
      type: actions.UPDATE_USER_INFO,
      body: {allow_notifications: value},
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
                onValueChange={value => {
                  handleNotificationToggle(value);
                }}
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

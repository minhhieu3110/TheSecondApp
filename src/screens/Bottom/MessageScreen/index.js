import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  Image,
  Text,
  Pressable,
  ScrollView,
  StatusBar,
} from '@components';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect} from 'react';
import RadialGradient from 'react-native-radial-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';

export default function MessageScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.HISTORY_CHAT,
      params: {from: 'user'},
    });
  }, [dispatch]);
  const chats = useSelector(state => state.historyChat?.data || []);
  console.log(chats);
  const onRefresh = () => {
    dispatch({
      type: actions.HISTORY_CHAT,
      params: {from: 'user'},
    });
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <Block height={53} backgroundColor={COLORS.white}>
        <Text
          marginTop={19}
          marginLeft={12}
          fontSize={15}
          semiBold
          color={COLORS.black2}>
          Tin nhắn
        </Text>
      </Block>
      <ScrollView onRefresh={onRefresh}>
        <Block marginTop={10} marginHorizontal={12} gap={12}>
          {chats?.map(item => (
            <Pressable
              key={item?.room_key}
              onPress={() =>
                commonRoot.navigate(router.DETAIL_MESSAGE, {
                  room: item?.room_key,
                  employee_id: item.employee_id,
                  name: item?.employee?.full_name,
                })
              }
              radius={8}
              backgroundColor={COLORS.white}>
              <Block marginVertical={12} marginLeft={12} row alignCenter>
                <Image
                  source={
                    item?.employee?.picture === ''
                      ? icon.icon_user_activity
                      : {
                          uri: `${URL_API.uploads}/${item?.employee?.picture}`,
                        }
                  }
                  width={60}
                  height={60}
                  radius={50}
                  resizeMode="cover"
                />
                <Block marginLeft={12}>
                  <Text fontSize={15} semiBold color={COLORS.black2}>
                    {item?.employee?.full_name}
                  </Text>
                  <Text
                    fontSize={14}
                    medium
                    color={
                      item?.unseen_count !== 0
                        ? COLORS.black2
                        : COLORS.placeholder
                    }
                    marginTop={10}>
                    {item?.last_message}
                  </Text>
                </Block>
              </Block>
              {item?.unseen_count !== 0 && (
                <Block
                  width={12}
                  height={12}
                  absolute
                  top={20}
                  right={12}
                  radius={50}
                  overflow={'hidden'}>
                  <RadialGradient
                    style={{width: 12, height: 12}}
                    colors={COLORS.gradient5}></RadialGradient>
                </Block>
              )}
            </Pressable>
          ))}
        </Block>
      </ScrollView>
    </Block>
  );
}

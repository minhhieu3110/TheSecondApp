import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  HeaderTitle,
  Icon,
  Image,
  Text,
  TextInput,
  ScrollView,
  Pressable,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {ConvertDateTimeStamp} from '@utils';
import {useEffect, useState} from 'react';
import RadialGradient from 'react-native-radial-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';
export default function DetailMessage({route}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.ROOM,
      params: {room_key: route?.params?.room},
    });
  }, [dispatch]);
  const room = useSelector(state => state.room?.data || []);
  const messageFromEmp = room.filter(mess => mess.type_from === 'employee');
  const messageFromUser = room.filter(mess => mess.type_from === 'user');
  const messEmp = messageFromEmp?.reverse();
  const messUser = messageFromUser?.reverse();
  const [content, setContent] = useState('');
  const onRefresh = () => {
    dispatch({
      type: actions.ROOM,
      params: {room_key: route?.params?.room},
    });
  };
  const sendMessage = () => {
    dispatch({
      type: actions.SEND_MESSAGE,
      body: {
        message: content,
        employee_id: route?.params?.employee_id,
        from: 'user',
      },
      onSuccess: () => {
        dispatch({
          type: actions.ROOM,
          params: {room_key: route?.params?.room},
        });
        setContent('');
      },
    });
  };
  console.log(room);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Lê Thu Huyền'} canGoBack />
      <ScrollView onRefresh={onRefresh}>
        <Block marginTop={13} marginHorizontal={12} gap={22}>
          {messEmp?.map(mess => (
            <Block row key={mess?.id}>
              <Image
                source={
                  // icon.icon_user_activity
                  mess?.send_employee?.picture === ''
                    ? icon.icon_user_activity
                    : {
                        uri: `${URL_API.uploads}/${mess?.send_employee?.picture}`,
                      }
                }
                width={30}
                height={30}
                radius={50}
              />
              <Block
                width={width - 209}
                paddingLeft={10}
                paddingTop={10}
                paddingRight={11}
                paddingBottom={17}
                marginLeft={10}
                backgroundColor={COLORS.white}
                radius={8}>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.black2}
                  lineHeight={22}>
                  {mess?.message}
                </Text>
              </Block>
              <Block justifyEnd>
                <Text
                  marginLeft={10}
                  fontSize={10}
                  regular
                  color={COLORS.textLineThrough}>
                  {ConvertDateTimeStamp(mess?.created_at)}
                </Text>
              </Block>
            </Block>
          ))}
          {messUser?.map(mess => (
            <Block alignEnd key={mess?.id}>
              <Block row>
                <Block justifyEnd>
                  <Block>
                    <Text fontSize={10} regular color={COLORS.textLineThrough}>
                      {ConvertDateTimeStamp(mess?.created_at)}
                    </Text>
                  </Block>
                </Block>
                <Block
                  width={width - 209}
                  paddingLeft={10}
                  paddingTop={10}
                  paddingRight={11}
                  paddingBottom={17}
                  backgroundColor={COLORS.darkRed1}
                  marginLeft={10}
                  radius={8}>
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.white}
                    lineHeight={22}>
                    {mess?.message}
                  </Text>
                </Block>
              </Block>
            </Block>
          ))}
        </Block>
      </ScrollView>
      <Block
        absolute
        bottom={0}
        width={width}
        height={72}
        backgroundColor={COLORS.white}
        alignCenter
        row>
        <TextInput
          marginLeft={12}
          marginVertical={12}
          width={width - 84}
          backgroundColor={COLORS.borderColor1}
          paddingLeft={26}
          radius={24}
          placeholder={'Soạn nội dung'}
          value={content}
          onChangeText={setContent}
        />
        <Pressable
          onPress={sendMessage}
          width={48}
          height={48}
          overflow={'hidden'}
          radius={50}
          marginLeft={12}>
          <RadialGradient
            colors={COLORS.gradient5}
            style={{
              width: 48,
              height: 48,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              IconType={FontAwesome}
              iconName={'send'}
              iconColor={COLORS.white}
            />
          </RadialGradient>
        </Pressable>
      </Block>
    </Block>
  );
}

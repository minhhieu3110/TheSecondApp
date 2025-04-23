import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  DoubleButton,
  HeaderTitle,
  Icon,
  Image,
  Pressable,
  Text,
  ScrollView,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {ConvertTimeStamp} from '@utils';
import {useEffect} from 'react';
import Toast from 'react-native-toast-message';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';
export default function ProfileStaff({route}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_DETAIL_EMPLOYEE,
      params: {id: route?.params?.id},
    });
  }, [dispatch]);
  const employee = useSelector(state => state.getDetailEmployee?.data || []);
  const addFavoriteEmployee = item_id => {
    dispatch({
      type: actions.FAVORITE_EMPLOYEE,
      body: {
        item_id: item_id,
        type: 'add',
      },
      onSuccess: res => {
        Toast.show({
          type: 'success',
          text1: res?.message,
        });
      },
    });
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={employee?.full_name} canGoBack />
      <ScrollView contentContainerStyle={{paddingBottom: 183}}>
        <Block width={width} height={333}>
          <Image
            source={{uri: `${URL_API.uploads}/${employee?.picture}`}}
            width={'100%'}
            height={'100%'}
            resizeMode="cover"
          />
        </Block>
        <Block
          width={width - 24}
          backgroundColor={COLORS.white}
          marginLeft={12}
          marginTop={-44}
          radius={8}>
          <Block width={width - 48} height={49} left={12} row marginTop={12}>
            <Block>
              <Text fontSize={15} semiBold color={COLORS.black1}>
                {employee?.full_name}
              </Text>
              <Block marginLeft={2} marginTop={11} row alignCenter>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}
                  marginRight={5}>
                  {employee?.star}
                </Text>
                <Icon
                  IconType={FontAwesome}
                  iconName={'star'}
                  iconSize={18}
                  iconColor={COLORS.yellow3}
                />
              </Block>
            </Block>
            <Pressable
              absolute
              right={0}
              onPress={() => addFavoriteEmployee(employee?.id)}>
              <Image
                source={
                  employee?.favorite_status === 'Liked'
                    ? icon.icon_heart_staff
                    : icon.icon_heart_staff_gray
                }
                height={34}
                width={34}
              />
            </Pressable>
          </Block>
          <Block
            width={width - 48}
            height={5}
            marginTop={13}
            marginLeft={12}
            backgroundColor={'#E8E8E8'}
          />
          <Block width={width - 44} marginLeft={10} marginTop={16}>
            <Block marginBottom={16}>
              <Block
                width={width - 48}
                row
                marginLeft={2}
                spaceBetween
                marginBottom={15}>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Email
                </Text>
                <Text fontSize={14} regular color={COLORS.black1}>
                  {employee?.email}
                </Text>
              </Block>
              <Block borderWidth={1} borderColor={COLORS.grayBreak} />
            </Block>
            <Block marginBottom={16}>
              <Block
                width={width - 48}
                row
                marginLeft={2}
                spaceBetween
                marginBottom={15}>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Năm sinh
                </Text>
                <Text fontSize={14} regular color={COLORS.black1}>
                  {ConvertTimeStamp(employee?.birthday)}
                </Text>
              </Block>
              <Block borderWidth={1} borderColor={COLORS.grayBreak} />
            </Block>
            <Block marginBottom={16}>
              <Block
                width={width - 48}
                row
                marginLeft={2}
                spaceBetween
                marginBottom={15}>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Quốc tịch
                </Text>
                <Text fontSize={14} regular color={COLORS.black1}>
                  {employee?.nationality}
                </Text>
              </Block>
              <Block borderWidth={1} borderColor={COLORS.grayBreak} />
            </Block>
            <Block marginBottom={16}>
              <Block
                width={width - 48}
                row
                marginLeft={2}
                spaceBetween
                marginBottom={15}>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Giới tính
                </Text>
                <Text fontSize={14} regular color={COLORS.black1}>
                  {employee?.gender}
                </Text>
              </Block>
              <Block borderWidth={1} borderColor={COLORS.grayBreak} />
            </Block>
            <Block marginBottom={16}>
              <Block
                width={width - 48}
                row
                marginLeft={2}
                spaceBetween
                marginBottom={15}>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Bắt đầu làm việc
                </Text>
                <Text fontSize={14} regular color={COLORS.black1}>
                  {employee?.created_at}
                </Text>
              </Block>
              <Block borderWidth={1} borderColor={COLORS.grayBreak} />
            </Block>
            <Block marginBottom={16}>
              <Block
                width={width - 48}
                row
                marginLeft={2}
                spaceBetween
                marginBottom={15}>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Chuyên môn
                </Text>
                <Block>
                  {employee?.services?.map(item => (
                    <Text
                      key={item.item_id}
                      fontSize={14}
                      regular
                      color={COLORS.black1}
                      right
                      lineHeight={22}>
                      {item?.title}
                    </Text>
                  ))}
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
      <Block
        width={width}
        height={72}
        alignCenter
        justifyCenter
        backgroundColor={COLORS.white}
        absolute
        bottom={0}>
        <DoubleButton title1="Chặn" title2="Hỗ trợ" />
      </Block>
    </Block>
  );
}

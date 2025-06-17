import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  Button,
  DoubleButton,
  HeaderTitle,
  Icon,
  Image,
  Pressable,
  StatusBar,
  Text,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {ConvertDateTimeStamp} from '@utils';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import {Modal, SafeAreaView, ScrollView} from 'react-native';
import Toast from 'react-native-toast-message';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {blockEmployee} from 'redux/reducers/combineReducers/userReducers';
import {URL_API} from 'redux/sagas/common';
export default function AddBlockStaff() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_LIST_EMPLOYEE,
    });
  }, [dispatch]);
  const employees = useSelector(state => state.getListEmployee?.data || []);
  const handleBlock = item_id => {
    dispatch({
      type: actions.BLOCK_EMPLOYEE,
      body: {item_id: item_id, type: 'add'},
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
      <StatusBar />
      <HeaderTitle title={'Thêm danh sách chặn'} canGoBack />
      <ScrollView
        contentContainerStyle={{marginTop: 15}}
        showsVerticalScrollIndicator={false}>
        <Block width={width - 24} marginLeft={12} gap={12}>
          {employees.map(emp => (
            <Pressable
              onPress={() =>
                commonRoot.navigate(router.PROFILE_EMPLOYEE, {id: emp?.id})
              }
              key={emp?.id}
              backgroundColor={COLORS.white}
              radius={8}
              row>
              <Block
                width={77}
                height={77}
                radius={8}
                marginLeft={10}
                overflow={'hidden'}
                marginTop={10}>
                <Image
                  source={{uri: `${URL_API.uploads}/${emp?.picture}`}}
                  width={'100%'}
                  height={'100%'}
                  resizeMode="cover"
                />
              </Block>
              <Block marginLeft={10.7} marginTop={15}>
                <Text fontSize={14} semiBold color={COLORS.black1}>
                  {emp?.full_name}
                </Text>
                <Block marginLeft={2} row alignCenter>
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.placeholder}
                    marginRight={5}>
                    {emp?.star}
                  </Text>
                  <Icon
                    IconType={FontAwesome}
                    iconName={'star'}
                    iconSize={18}
                    iconColor={COLORS.yellow3}
                  />
                </Block>
                {emp?.services?.map(ser => (
                  <Text
                    key={ser?.item_id}
                    fontSize={14}
                    regular
                    color={COLORS.red4}
                    marginTop={11}>
                    {ser?.title}
                  </Text>
                ))}
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}
                  marginTop={13}>
                  {ConvertDateTimeStamp(emp?.created_at)}
                </Text>
                <Text></Text>
              </Block>
              <Pressable
                absolute
                right={10}
                marginTop={10}
                width={34}
                height={34}
                onPress={() => handleBlock(emp?.id)}>
                <Image source={icon.icon_block} width={34} height={34} />
              </Pressable>
            </Pressable>
          ))}
        </Block>
      </ScrollView>
    </Block>
  );
}

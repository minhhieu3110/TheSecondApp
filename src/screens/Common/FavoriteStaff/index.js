import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  Button,
  HeaderTitle,
  Icon,
  Image,
  Loading,
  Pressable,
  Text,
  ScrollView,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import {RefreshControl} from 'react-native';
import Toast from 'react-native-toast-message';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';
export default function FavoriteStaff() {
  const favoriteEmp = useSelector(
    state => state.getFavoriteEmployee?.data || [],
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_FAVORITE_EMPLOYEE,
    });
  }, [dispatch]);

  const removeFavoriteEmployee = item_id => {
    dispatch({
      type: actions.FAVORITE_EMPLOYEE,
      body: {
        item_id: item_id,
        type: 'remove',
      },
      onSuccess: res => {
        Toast.show({
          type: 'success',
          text1: res?.message,
        });
        dispatch({
          type: actions.GET_FAVORITE_EMPLOYEE,
        });
      },
    });
  };
  const onRefresh = () => {
    dispatch({
      type: actions.GET_FAVORITE_EMPLOYEE,
    });
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle
        title={'Nhân viên yêu thích'}
        root={bottomRoot}
        screenName={router.PROFILE_SCREEN}
      />
      <ScrollView contentContainerStyle={{marginTop: 15}} onRefresh={onRefresh}>
        <Block width={width - 24} marginLeft={12} gap={12}>
          {favoriteEmp?.map(emp => (
            <Pressable
              onPress={() =>
                commonRoot.navigate(router.PROFILE_EMPLOYEE, {id: emp?.id})
              }
              key={emp?.id}
              height={97}
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
                  resizeMode="contain"
                />
              </Block>
              <Block height={43} marginLeft={10.7} marginTop={15}>
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
              </Block>
              <Pressable
                width={34}
                height={34}
                absolute
                right={10}
                top={10}
                onPress={() => removeFavoriteEmployee(emp?.id)}>
                <Image source={icon.icon_heart_staff} height={34} width={34} />
              </Pressable>
            </Pressable>
          ))}
        </Block>
      </ScrollView>
      <Button
        title="Thêm"
        onPress={() => commonRoot.navigate(router.ADD_STAFF)}
      />
    </Block>
  );
}

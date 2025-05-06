import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  Button,
  HeaderTitle,
  Icon,
  Image,
  Pressable,
  Text,
  ScrollView,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';
import Toast from 'react-native-toast-message';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {URL_API} from 'redux/sagas/common';
export default function BlockStaff() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_BLOCK_EMPLOYEE,
    });
  }, [dispatch]);
  const empBlock = useSelector(state => state.getBlockedEmployee?.data || []);
  const removeBlockedEmployee = item_id => {
    dispatch({
      type: actions.BLOCK_EMPLOYEE,
      body: {
        item_id: item_id,
        type: 'remove',
      },
      onSuccess(res) {
        Toast.show({
          type: 'success',
          text1: res?.message,
        });
        dispatch({type: actions.GET_BLOCK_EMPLOYEE});
      },
    });
  };
  const onRefresh = () => {
    dispatch({
      type: actions.GET_BLOCK_EMPLOYEE,
    });
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Danh sách chặn'} canGoBack />
      <ScrollView contentContainerStyle={{marginTop: 15}} onRefresh={onRefresh}>
        <Block width={width - 24} marginLeft={12} gap={12}>
          {empBlock?.map(emp => (
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
                  width={77}
                  height={77}
                  resizeMode="cover"
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
                onPress={() => removeBlockedEmployee(emp?.id)}
                absolute
                top={10}
                right={10.2}
                width={76.83}
                height={30.33}
                radius={15}
                overflow={'hidden'}
                alignCenter
                justifyCenter>
                <RadialGradient
                  colors={COLORS.gradient5}
                  radius={40}
                  style={{
                    width: 76.83,
                    height: 30.33,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text fontSize={13} medium color={COLORS.white}>
                    Bỏ chặn
                  </Text>
                </RadialGradient>
              </Pressable>
            </Pressable>
          ))}
        </Block>
      </ScrollView>
      <Button
        title="Thêm"
        onPress={() => commonRoot.navigate(router.ADD_BLOCK_STAFF)}
      />
    </Block>
  );
}

import actions from '@actions';
import {icon, image} from '@assets';
import {Block, Image, Pressable, Text, Icon} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {ConvertDateTimeStamp} from '@utils';
import {root} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import {ActivityIndicator, Modal, SafeAreaView, ScrollView} from 'react-native';
import RenderHTML from 'react-native-render-html';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
export default function DetailNotification({route}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_DETAIL_NOTIFICATION,
      params: {item_id: route?.params?.item_id},
    });
  }, [dispatch]);
  const detailNoti = useSelector(
    state => state.getDetailNotification?.data || [],
  );
  const {isLoading} = useSelector(state => state.getDetailNotification);
  return isLoading ? (
    <ActivityIndicator size={'large'} color={COLORS.red4} />
  ) : (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block width={width} height={199.6}>
        <Image
          source={{uri: detailNoti?.picture}}
          width={width}
          height={199.6}
          resizeMode="cover"
        />
        <Pressable
          onPress={() => root.goBack()}
          width={30}
          height={30}
          radius={50}
          absolute
          top={13}
          left={12}
          backgroundColor={COLORS.black}
          opacity={0.6}>
          <Icon
            IconType={Ionicons}
            iconName={'chevron-back-outline'}
            iconSize={30}
            iconColor={COLORS.white}
          />
        </Pressable>
      </Block>
      <Block
        marginTop={-19.6}
        width={width - 24}
        paddingBottom={27}
        radius={8}
        backgroundColor={COLORS.white}
        marginLeft={12}>
        <Block marginTop={12} marginHorizontal={12} width={width - 48}>
          <Text fontSize={18} semiBold color={COLORS.black1} lineHeight={22}>
            {detailNoti?.title}
          </Text>
          <Text fontSize={15} semiBold color={COLORS.black1} marginTop={27}>
            {detailNoti?.short}
          </Text>
          <Block marginTop={24}>
            <RenderHTML
              contentWidth={width - 48}
              source={{html: detailNoti?.content}}
              tagsStyles={{
                p: {
                  fontSize: 14,
                  fontWeight: 'regular',
                  color: COLORS.black2,
                  lineHeight: 22,
                },
              }}
            />
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

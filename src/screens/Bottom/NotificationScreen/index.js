import actions from '@actions';
import {icon, image} from '@assets';
import {Block, Image, Pressable, Text, Icon} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {ConvertDateTimeStamp} from '@utils';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import {Modal, SafeAreaView, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
export default function NotificationScreen() {
  const [detailNotification, setDetailNotification] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_NOTIFICATION,
    });
  }, [dispatch]);
  const notifications = useSelector(state => state.getNotification?.data || []);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block width={width} height={53} backgroundColor={COLORS.white}>
        <Text
          marginLeft={12}
          marginTop={20}
          fontSize={15}
          semiBold
          color={COLORS.black1}>
          Thông báo
        </Text>
      </Block>
      <Block width={width - 24} marginLeft={12} marginTop={15}>
        <ScrollView
          contentContainerStyle={{paddingBottom: 300}}
          showsVerticalScrollIndicator={false}>
          {notifications.map(item => (
            <Pressable
              onPress={() =>
                commonRoot.navigate(router.DETAIL_NOTIFICATION, {
                  item_id: item.item_id,
                })
              }
              key={item.item_id}
              height={108}
              radius={8}
              backgroundColor={COLORS.white}
              paddingBottom={12}
              marginBottom={12}>
              <Block
                marginLeft={12}
                marginTop={12}
                height={77}
                row
                paddingBottom={12}>
                <Block width={60} height={60} radius={60} overflow={'hidden'}>
                  <Image
                    source={{uri: item?.picture}}
                    width={'100%'}
                    height={'100%'}
                    resizeMode="contain"
                  />
                </Block>
                <Block width={294} height={67} marginTop={10} marginLeft={12}>
                  <Text fontSize={15} semiBold color={COLORS.black2}>
                    {item?.title}
                  </Text>
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.black1}
                    marginBottom={14}
                    numberOfLines={1}>
                    {item?.short}
                  </Text>
                  <Text fontSize={14} regular color={COLORS.placeholder}>
                    {ConvertDateTimeStamp(item?.created_at)}
                  </Text>
                </Block>
              </Block>
            </Pressable>
          ))}
        </ScrollView>
      </Block>
    </Block>
  );
}

import actions from '@actions';
import {icon, image} from '@assets';
import {
  Block,
  Image,
  Pressable,
  Text,
  ScrollView,
  StatusBar,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {ConvertDateTimeStamp} from '@utils';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
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
  const {isLoading} = useSelector(state => state.getNotification);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
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
      <Block width={width - 24} marginLeft={12} marginTop={15} gap={12}>
        <ScrollView contentContainerStyle={{paddingBottom: 181}}>
          {isLoading ? (
            <ActivityIndicator color={COLORS.red4} />
          ) : (
            notifications.map(item => (
              <Pressable
                onPress={() =>
                  commonRoot.navigate(router.DETAIL_NOTIFICATION, {
                    item_id: item.item_id,
                  })
                }
                key={item.item_id}
                radius={8}
                backgroundColor={COLORS.white}
                paddingBottom={8}>
                <Block paddingLeft={12} marginTop={12} row>
                  <Image
                    source={{uri: item?.picture}}
                    width={60}
                    height={60}
                    resizeMode="cover"
                    radius={60}
                  />
                  <Block
                    width={'80%'}
                    paddingBottom={10}
                    marginTop={10}
                    paddingLeft={12}>
                    <Text fontSize={15} semiBold color={COLORS.black2}>
                      {item?.title}
                    </Text>
                    <Text
                      fontSize={14}
                      regular
                      color={COLORS.black1}
                      numberOfLines={1}>
                      {item?.short}
                    </Text>
                    <Text
                      fontSize={14}
                      regular
                      color={COLORS.placeholder}
                      marginTop={14}>
                      {ConvertDateTimeStamp(item?.created_at)}
                    </Text>
                  </Block>
                </Block>
              </Pressable>
            ))
          )}
        </ScrollView>
      </Block>
    </Block>
  );
}

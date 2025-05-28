import actions from '@actions';
import {icon} from '@assets';
import {
  Block,
  HeaderTitle,
  Pressable,
  Image,
  Text,
  ScrollView,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {ConvertTimeStamp} from '@utils';
import {commonRoot} from 'navigation/navigationRef';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function AllPromo() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_LIST_PROMO,
    });
  }, [dispatch]);
  const promo = useSelector(state => state.getPromo?.data || []);
  console.log(promo);

  return (
    <Block backgroundColor={COLORS.gray10} flex>
      <HeaderTitle title={'Ưu đãi'} canGoBack />
      <ScrollView>
        <Block marginTop={15} gap={12}>
          {promo?.map(item => (
            <Pressable
              onPress={() =>
                commonRoot.navigate(router.DETAIL_PROMO, {
                  item_id: item.item_id,
                })
              }
              key={item.item_id}
              backgroundColor={COLORS.white}
              radius={8}
              rowCenter
              paddingVertical={12}
              marginHorizontal={12}>
              <Block
                width={150}
                marginLeft={12}
                height={113}
                radius={10}
                overflow={'hidden'}>
                <Image source={{uri: item?.picture}} width={150} height={113} />
              </Block>
              <Block marginLeft={10} marginTop={17.9} width={width - 200}>
                <Block row alignCenter>
                  <Image
                    source={icon.icon_calendar}
                    width={13.47}
                    height={13.78}
                  />
                  <Text
                    marginLeft={4.4}
                    marginTop={2.08}
                    fontSize={12}
                    regular
                    color={COLORS.lightGray1}>
                    {ConvertTimeStamp(item.created_at)}
                  </Text>
                </Block>
                <Text
                  marginTop={10}
                  fontSize={15}
                  medium
                  color={COLORS.black1}
                  numberOfLines={2}>
                  {item.title}
                </Text>
              </Block>
            </Pressable>
          ))}
        </Block>
      </ScrollView>
    </Block>
  );
}

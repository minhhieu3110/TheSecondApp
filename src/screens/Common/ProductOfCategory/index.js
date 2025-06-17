import {
  Block,
  HeaderTitle,
  Text,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
} from '@components';
import {COLORS} from '@theme';
import {image} from '@assets';
import {width} from '@responsive';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import actions from '@actions';
import RadialGradient from 'react-native-radial-gradient';
import {formatCurrency} from 'utils/helper';
export default function ProductOfCategory({route}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.LIST_PRODUCT,
      params: {group_id: route?.params?.group_id},
    });
  }, [dispatch, route?.params?.group_id]);
  const products = useSelector(state => state.getListProduct?.data || []);
  console.log('products', products);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <HeaderTitle
        root={commonRoot}
        screenName={router.ALL_CATEGORY}
        title={route?.params?.title}
      />
      <ScrollView>
        <Block
          marginTop={15}
          row
          wrap
          columnGap={10}
          rowGap={12}
          marginHorizontal={12}>
          {products?.map(item => (
            <Pressable
              onPress={() =>
                commonRoot.navigate(router.DETAIL_PRODUCT, {
                  item_id: item.item_id,
                })
              }
              key={item.item_id}
              width={(width - 34) / 2}
              paddingBottom={11}
              radius={8}
              backgroundColor={COLORS.white}>
              <Block
                width={(width - 34) / 2}
                height={(width - 34) / 2}
                borderTopLeftRadius={5}
                borderTopRightRadius={5}
                overflow={'hidden'}>
                <Image
                  source={{uri: item?.picture}}
                  width={(width - 34) / 2}
                  height={(width - 34) / 2}
                />
                {item?.percent_discount === 0 ? (
                  ''
                ) : (
                  <Block
                    width={39}
                    height={28}
                    absolute
                    top={4}
                    left={5}
                    overflow={'hidden'}
                    borderTopLeftRadius={5}
                    borderBottomRightRadius={5}>
                    <RadialGradient
                      colors={COLORS.gradient5}
                      style={{
                        width: 39,
                        height: 28,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text fontSize={12} regular color={COLORS.white}>
                        {item?.percent_discount} %
                      </Text>
                    </RadialGradient>
                  </Block>
                )}
              </Block>
              <Block marginTop={10} marginHorizontal={10}>
                <Text
                  fontSize={15}
                  semiBold
                  color={COLORS.black2}
                  lineHeight={22}
                  numberOfLines={2}>
                  {item?.title}
                </Text>
                <Block marginTop={18} height={40} justifyCenter>
                  <Text
                    fontSize={15}
                    semiBold
                    color={COLORS.red4}
                    lineHeight={17}>
                    {item?.price === item?.price_sale || item?.price_sale === 0
                      ? formatCurrency(item?.price)
                      : formatCurrency(item?.price_sale)}
                  </Text>
                  {item?.percent_discount === 0 ? (
                    ''
                  ) : (
                    <Text
                      fontSize={11}
                      regular
                      color={COLORS.placeholder}
                      lineThrough>
                      {formatCurrency(item?.price)}
                    </Text>
                  )}
                </Block>
              </Block>
            </Pressable>
          ))}
        </Block>
      </ScrollView>
    </Block>
  );
}

import {Block, Carousel, Icon, Image, Pressable, Text} from '@components';
import {COLORS} from '@theme';
import {ScrollView} from 'react-native';
import {icon} from '@assets';
import {width} from '@responsive';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import router from '@router';
import RadialGradient from 'react-native-radial-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {useCallback, useEffect} from 'react';
import actions from '@actions';
import {formatCurrency} from 'utils/helper';
export default function ShoppingScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_BANNER,
      params: {
        group: 'main-eshop',
      },
    });
    dispatch({
      type: actions.LIST_STATUS,
    });
    dispatch({
      type: actions.LIST_CATEGORY,
      params: {is_paginate: 0},
    });
    dispatch({
      type: actions.LIST_PRODUCT_DISCOUNT,
      params: {type: 'discount'},
    });
    dispatch({
      type: actions.BANNER_SUGGESTION,
      params: {group: 'suggestions-for-you'},
    });
    dispatch({
      type: actions.LIST_PRODUCT_SUGGESTION,
      params: {type: 'suggestions-for-you'},
    });
    dispatch({
      type: actions.GET_CART,
    });
  }, [dispatch]);
  const bannerEShop = useSelector(state => state.getBanner?.data || []);
  const listStatus = useSelector(state => state.getListStatus?.data || []);
  const listCategory = useSelector(state => state.getListCategory?.data || []);
  const listProductDiscount = useSelector(
    state => state.getListProductDiscount?.data || [],
  );
  const bannerSuggestions = useSelector(
    state => state.getBannerSuggest?.data || [],
  );
  const listProductSuggestion = useSelector(
    state => state.getListProductSuggestion?.data || [],
  );
  const carts = useSelector(state => state.getCart?.data || []);
  const renderItemBanner = useCallback(({item}) => {
    return (
      <Block>
        <Image
          radius={10}
          source={{uri: item.content}}
          width={width - 68}
          height={164}
          resizeMode="cover"
          marginRight={10}
        />
      </Block>
    );
  }, []);
  const COLUMN_COUNT = 3;

  const splitIntoColumns = (data, columns) => {
    const result = Array.from({length: columns}, () => []);
    data.forEach((item, index) => {
      result[index % columns].push(item);
    });
    return result;
  };

  const columnData = splitIntoColumns(listCategory, COLUMN_COUNT);
  return (
    <Block flex backgroundColor={COLORS.gray10} marginBottom>
      <ScrollView contentContainerStyle={{paddingBottom: 135}}>
        <Block height={197}>
          <Carousel
            data={bannerEShop || []}
            dotInside={true}
            dotStyles={{width: 8, height: 8}}
            dotContainerStyles={{marginTop: -37}}
            duration={2000}
            itemHeight={197}
            itemWidth={width}
            renderItem={renderItemBanner}
          />
          <Block absolute top={16} right={6} left={12} row>
            <Pressable
              onPress={() => bottomRoot.navigate(router.HOME_SCREEN)}
              width={35}
              height={35}
              radius={18}
              backgroundColor={COLORS.black50}
              alignCenter
              justifyCenter>
              <Icon
                IconType={MaterialIcons}
                iconName={'keyboard-arrow-left'}
                iconSize={35}
                iconColor={COLORS.white}
              />
            </Pressable>
            <Block absolute right={0} row>
              <Block
                width={35}
                height={35}
                radius={18}
                backgroundColor={COLORS.black50}
                alignCenter
                justifyCenter>
                <Icon
                  IconType={Octicons}
                  iconName={'search'}
                  iconSize={20}
                  iconColor={COLORS.white}
                />
              </Block>
              <Pressable
                onPress={() => commonRoot.navigate(router.CART)}
                width={44}
                marginLeft={10}
                row>
                <Image source={icon.icon_cart} width={35} height={35} />
                {carts?.total_quantity === 0 ? (
                  ''
                ) : (
                  <Block
                    absolute
                    top={-6}
                    right={0}
                    backgroundColor={COLORS.red4}
                    radius={20}
                    paddingBottom={2}
                    width={20}
                    height={20}
                    justifyCenter
                    alignCenter>
                    <Text fontSize={10} regular color={COLORS.white}>
                      {carts?.total_quantity > 99
                        ? '99+'
                        : carts?.total_quantity}
                    </Text>
                  </Block>
                )}
              </Pressable>
            </Block>
          </Block>
        </Block>
        <Block backgroundColor={COLORS.white} paddingBottom={15}>
          <Block marginHorizontal={12} marginTop={-17}>
            <Block
              shadow3
              backgroundColor={COLORS.white}
              paddingBottom={18.4}
              radius={15}>
              <Block
                marginTop={12}
                rowCenter
                spaceBetween
                marginHorizontal={12}>
                {listStatus?.map((status, index) => (
                  <Pressable
                    key={index}
                    onPress={() => commonRoot.navigate(router.ORDER_OF_YOU)}
                    maxWidth={68}
                    alignCenter>
                    <Image
                      source={{uri: status?.picture}}
                      width={62}
                      height={62}
                    />
                    <Text
                      marginTop={15.6}
                      fontSize={12}
                      regular
                      color={COLORS.black2}
                      center>
                      {status?.title}
                    </Text>
                  </Pressable>
                ))}
              </Block>
            </Block>
          </Block>
          <Block marginHorizontal={12} marginTop={25} justifyCenter>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Danh mục
            </Text>
            <Pressable
              onPress={() => commonRoot.navigate(router.ALL_CATEGORY)}
              absolute
              right={0}>
              <Text fontSize={13} regular color={COLORS.red4}>
                Xem tất cả
              </Text>
            </Pressable>
          </Block>
          <Block row marginTop={14} gap={6}>
            {columnData.map((column, colIndex) => (
              <Block key={colIndex} flex={1} gap={7}>
                {column.map((item, index) => {
                  const height = (index + colIndex) % 2 === 0 ? 164 : 127;
                  return (
                    <Pressable
                      key={index}
                      onPress={() =>
                        commonRoot.navigate(router.PRODUCT_OF_CATEGORY, {
                          group_id: item.group_id,
                          title: item.title,
                        })
                      }
                      height={height}
                      width={'100%'}>
                      <Image
                        source={{uri: item.picture}}
                        style={{
                          width: '100%',
                          height: '100%',
                          resizeMode: 'cover',
                        }}
                      />
                      <Block
                        position="absolute"
                        bottom={11}
                        left={11}
                        right={11}
                        zIndex={10}>
                        <Text fontSize={15} semiBold color={COLORS.white}>
                          {item.title}
                        </Text>
                      </Block>
                    </Pressable>
                  );
                })}
              </Block>
            ))}
          </Block>
        </Block>
        <Block marginHorizontal={12}>
          <Block marginTop={20} row alignCenter>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Giảm giá<Text color={COLORS.red4}> SHOCK</Text>
            </Text>
            <Block absolute right={0}>
              <Text fontSize={13} regular color={COLORS.red4}>
                Xem tất cả
              </Text>
            </Block>
          </Block>
          <Block marginTop={15} row wrap columnGap={10} rowGap={12}>
            {listProductDiscount?.slice(0, 6)?.map(item => (
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
                  <Text
                    fontSize={15}
                    semiBold
                    color={COLORS.red4}
                    lineHeight={17}
                    marginTop={18}>
                    {formatCurrency(item?.price_sale)}
                  </Text>
                  <Text
                    fontSize={11}
                    regular
                    color={COLORS.placeholder}
                    lineThrough
                    marginTop={12}>
                    {formatCurrency(item?.price)}
                  </Text>
                </Block>
              </Pressable>
            ))}
          </Block>
          <Block marginTop={10} height={164}>
            <Carousel
              data={bannerSuggestions || []}
              duration={2000}
              isDots={false}
              itemHeight={164}
              itemWidth={width - 68}
              renderItem={renderItemBanner}
            />
          </Block>
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={20}>
            Gợi ý cho bạn
          </Text>
          <Block marginTop={15} row wrap columnGap={10} rowGap={12}>
            {listProductSuggestion?.map(item => (
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
                      {item?.price === item?.price_sale ||
                      item?.price_sale === 0
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
          <Text
            marginTop={16}
            fontSize={14}
            light
            color={COLORS.placeholder}
            center>
            Loading ...
          </Text>
        </Block>
      </ScrollView>
    </Block>
  );
}

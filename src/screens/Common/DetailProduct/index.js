import {icon, image} from '@assets';
import {
  Block,
  Image,
  Pressable,
  Icon,
  Text,
  RankStar,
  ScrollView,
  Carousel,
  TextInput,
  StatusBar,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import router from '@router';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useCallback, useEffect, useState} from 'react';
import {formatCurrency} from '@utils/helper';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@actions';
import RenderHTML from 'react-native-render-html';
import RadialGradient from 'react-native-radial-gradient';
import Toast from 'react-native-toast-message';
import {URL_API} from 'redux/sagas/common';
import {ConvertDateTimeStamp} from '@utils';
import {Modal, SafeAreaView, TouchableOpacity} from 'react-native';

export default function DetailProduct({route}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.DETAIL_PRODUCT,
      params: {item_id: route?.params?.item_id},
    });
    dispatch({
      type: actions.RATING,
      params: {item_id: route?.params?.item_id},
    });
  }, [route?.params?.item_id, dispatch]);
  const detailProduct = useSelector(state => state.detailProduct?.data || []);
  const [menuVertical, setMenuVertical] = useState(false);
  const carts = useSelector(state => state.getCart?.data || []);
  const listRating = useSelector(state => state.listRating?.data || []);
  const average = useSelector(state => state?.listRating?.average || 0);
  const total = useSelector(state => state?.listRating?.total || 0);

  const renderPicture = useCallback(({item}) => {
    return (
      <Block>
        <Image
          source={{uri: item}}
          width={width}
          height={width}
          resizeMode="cover"
        />
      </Block>
    );
  }, []);
  const [numberImg, setNumberImg] = useState(1);
  const addToCart = item_id => {
    dispatch({
      type: actions.ADD_CART,
      body: {
        product_id: item_id,
        quantity: 1,
      },
      onSuccess: res => {
        Toast.show({
          type: 'success',
          text1: res?.message,
        });
        dispatch({
          type: actions.GET_CART,
        });
      },
    });
  };
  const buyNow = item_id => {
    dispatch({
      type: actions.ADD_CART,
      body: {
        product_id: item_id,
        quantity: 1,
      },
      onSuccess: res => {
        Toast.show({
          type: 'success',
          text1: res?.message,
        });
        commonRoot.navigate(router.PAY_SHOPPING);
      },
    });
  };
  const [showReport, setShowReport] = useState(0);
  const [content, setContent] = useState('');
  const handleReport = () => {
    dispatch({
      type: actions.REPORT_PRODUCT,
      body: {product_id: route?.params?.item_id, content: content},
      onSuccess: res => {
        Toast.show({
          type: 'success',
          text1: res?.message,
        });
        setShowReport(!showReport);
        setMenuVertical(!menuVertical);
      },
    });
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <ScrollView contentContainerStyle={{paddingBottom: 203}}>
        <Block backgroundColor={COLORS.white} paddingBottom={22}>
          <Block width={width} height={width}>
            {detailProduct?.arr_picture === '' ? (
              <Image
                source={{uri: detailProduct?.picture}}
                width={'100%'}
                height={'100%'}
                resizeMode="cover"
              />
            ) : (
              <Carousel
                data={detailProduct?.arr_picture || []}
                renderItem={renderPicture}
                isDots={false}
                onChangeIndex={index => setNumberImg(index)}
              />
            )}
            <Block absolute top={16} left={12} right={12} row>
              <Pressable
                onPress={() => commonRoot.navigate(router.SHOPPING)}
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
              <Block absolute right={0} alignEnd>
                <Block row rowGap={10}>
                  <Block>
                    <Image
                      source={icon.icon_message_1}
                      width={35}
                      height={35}
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
                  <Pressable
                    onPress={() => setMenuVertical(!menuVertical)}
                    width={35}
                    height={35}
                    radius={18}
                    backgroundColor={
                      menuVertical === true ? COLORS.black70 : COLORS.black50
                    }
                    marginLeft={9}
                    alignCenter
                    justifyCenter>
                    <Icon
                      IconType={Entypo}
                      iconName={'dots-three-vertical'}
                      iconSize={20}
                      iconColor={COLORS.white}
                    />
                  </Pressable>
                </Block>
                {menuVertical === true && (
                  <Pressable
                    onPressOut={() => setMenuVertical(false)}
                    paddingBottom={13}
                    marginTop={10}
                    backgroundColor={COLORS.black70}
                    radius={10}>
                    <Block marginTop={13.9}>
                      <Pressable
                        onPress={() => bottomRoot.navigate(router.HOME_SCREEN)}
                        row
                        marginLeft={10}
                        alignCenter>
                        <Icon
                          IconType={Ionicons}
                          iconName={'home'}
                          iconSize={15}
                          iconColor={COLORS.white}
                        />
                        <Text
                          marginLeft={9.9}
                          fontSize={14}
                          regular
                          color={COLORS.white}
                          marginTop={1.1}>
                          Trở về trang chủ
                        </Text>
                      </Pressable>
                      <Block
                        width={width - 218}
                        borderWidth={0.5}
                        borderColor={COLORS.white50}
                        marginTop={11}
                        marginBottom={12}
                      />
                      <Block row marginLeft={10} alignCenter>
                        <Icon
                          IconType={Ionicons}
                          iconName={'share-social-sharp'}
                          iconSize={15}
                          iconColor={COLORS.white}
                        />
                        <Text
                          marginLeft={9.9}
                          fontSize={14}
                          regular
                          color={COLORS.white}
                          marginTop={1.1}>
                          Chia sẻ
                        </Text>
                      </Block>
                      <Block
                        width={width - 218}
                        borderWidth={0.5}
                        borderColor={COLORS.white50}
                        marginTop={11}
                        marginBottom={12}
                      />
                      <Pressable
                        row
                        marginLeft={10}
                        alignCenter
                        onPress={() => setShowReport(!showReport)}>
                        <Icon
                          IconType={MaterialIcons}
                          iconName={'report-problem'}
                          iconSize={15}
                          iconColor={COLORS.white}
                        />
                        <Text
                          marginLeft={9.9}
                          fontSize={14}
                          regular
                          color={COLORS.white}
                          marginTop={1.1}>
                          Báo cáo sản phẩm này
                        </Text>
                      </Pressable>
                      <Block
                        width={width - 218}
                        borderWidth={0.5}
                        borderColor={COLORS.white50}
                        marginTop={11}
                        marginBottom={12}
                      />
                      <Block row marginLeft={10} alignCenter>
                        <Icon
                          IconType={AntDesign}
                          iconName={'questioncircle'}
                          iconSize={15}
                          iconColor={COLORS.white}
                        />
                        <Text
                          marginLeft={9.9}
                          fontSize={14}
                          regular
                          color={COLORS.white}
                          marginTop={1.1}>
                          Bạn cần giúp đỡ?
                        </Text>
                      </Block>
                    </Block>
                  </Pressable>
                )}
              </Block>
            </Block>
            {detailProduct?.arr_picture === '' ? (
              ''
            ) : (
              <Block
                paddingVertical={4}
                absolute
                right={12}
                bottom={8}
                radius={15}
                width={37}
                height={23}
                justifyCenter
                alignCenter
                backgroundColor={COLORS.black70}>
                <Text fontSize={12} regular color={COLORS.white}>
                  {numberImg}/{detailProduct?.arr_picture?.length}
                </Text>
              </Block>
            )}
          </Block>
          <Block marginTop={10} marginHorizontal={12}>
            {detailProduct?.arr_picture === '' ? (
              ''
            ) : (
              <ScrollView horizontal={true}>
                <Block row gap={10}>
                  {detailProduct?.arr_picture?.map(item => (
                    <Block
                      key={item}
                      width={(width - 64) / 5}
                      height={73}
                      radius={5}
                      overflow={'hidden'}>
                      <Image
                        source={{uri: item}}
                        width={'100%'}
                        height={'100%'}
                        resizeMode="cover"
                      />
                    </Block>
                  ))}
                </Block>
              </ScrollView>
            )}
            <Text
              fontSize={18}
              bold
              color={COLORS.black2}
              marginTop={24}
              numberOfLines={1}>
              {detailProduct?.title}
            </Text>
            <Block marginTop={14} row>
              <Block marginTop={3}>
                <Text fontSize={16} semiBold color={COLORS.red4}>
                  {formatCurrency(detailProduct?.price_sale)}
                </Text>
                <Text
                  marginTop={8}
                  fontSize={14}
                  regular
                  color={COLORS.placeholder}
                  lineThrough>
                  {formatCurrency(detailProduct?.price)}
                </Text>
              </Block>
              <Block
                marginLeft={33}
                borderTopLeftRadius={5}
                borderBottomRightRadius={5}
                backgroundColor={COLORS.red4}
                alignCenter
                justifyCenter
                width={35}
                height={28}>
                <Text fontSize={12} regular color={COLORS.white}>
                  -{detailProduct?.percent_discount}%
                </Text>
              </Block>
            </Block>
            <Block
              height={5}
              backgroundColor={COLORS.grayBreak}
              marginTop={11}
              width={width}
              marginHorizontal={-12}
            />
            <Block marginTop={15}>
              <Text fontSize={15} semiBold color={COLORS.black2}>
                Mô tả sản phẩm
              </Text>
              <Block marginTop={15}>
                <RenderHTML
                  contentWidth={width - 24}
                  source={{html: detailProduct?.content}}
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
              <Block marginTop={23} alignCenter>
                <Block row alignCenter>
                  <Text fontSize={12} regular color={COLORS.red4}>
                    Xem thêm
                  </Text>
                  <Icon
                    marginLeft={5}
                    iconSize={10}
                    IconType={AntDesign}
                    iconColor={COLORS.red4}
                    iconName={'arrowright'}
                  />
                </Block>
              </Block>
            </Block>
            <Block
              height={5}
              backgroundColor={COLORS.grayBreak}
              marginTop={14}
              width={width}
              marginHorizontal={-12}
            />
            <Block marginTop={20}>
              <Block rowCenter spaceBetween>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Đánh giá sản phẩm
                </Text>
                <Text
                  onPress={() =>
                    commonRoot.navigate(router.EVALUATE_PRODUCT, {
                      item_id: route?.params?.item_id,
                    })
                  }
                  fontSize={13}
                  regular
                  color={COLORS.red4}>
                  Xem tất cả
                </Text>
              </Block>
              <Block marginTop={14} rowCenter>
                <Block width={width - 343}>
                  <RankStar size={12} value={average} />
                </Block>
                <Text fontSize={12} regular color={COLORS.black2}>
                  {average}/5
                </Text>
                <Text
                  marginLeft={12}
                  fontSize={12}
                  regular
                  color={COLORS.placeholder}>
                  ({total} đánh giá)
                </Text>
              </Block>
              <Block marginTop={12} paddingVertical={12} gap={12}>
                {listRating?.slice(0, 4)?.map(rate => (
                  <Block key={rate.created_at}>
                    <Block row paddingBottom={5}>
                      <Block
                        width={25}
                        height={25}
                        radius={50}
                        overflow={'hidden'}>
                        <Image
                          source={{
                            uri: `${URL_API.uploads}/${rate?.user?.picture}`,
                          }}
                          width={25}
                          height={25}
                          resizeMode="cover"
                        />
                      </Block>
                      <Block marginLeft={8} marginTop={5}>
                        <Text fontSize={14} medium color={COLORS.black2}>
                          {rate?.user?.full_name}
                        </Text>
                        <Block width={width - 343} marginTop={11}>
                          <RankStar size={12} value={rate?.star} />
                        </Block>
                        {rate?.content === '' ? (
                          ''
                        ) : (
                          <Text
                            fontSize={14}
                            regular
                            color={COLORS.black2}
                            marginTop={8}
                            numberOfLines={2}>
                            {rate?.content}
                          </Text>
                        )}
                        <Text
                          fontSize={14}
                          regular
                          color={COLORS.lightGray1}
                          marginTop={10}>
                          {ConvertDateTimeStamp(rate?.created_at)}
                        </Text>
                      </Block>
                    </Block>
                    <Block
                      height={1}
                      backgroundColor={COLORS.gray15}
                      marginTop={12}
                    />
                  </Block>
                ))}
              </Block>
              <Block marginTop={16} alignCenter>
                <Block row alignCenter>
                  <Text fontSize={12} regular color={COLORS.red4}>
                    Xem thêm
                  </Text>
                  <Icon
                    marginLeft={5}
                    iconSize={10}
                    IconType={AntDesign}
                    iconColor={COLORS.red4}
                    iconName={'arrowright'}
                  />
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block marginTop={13} marginHorizontal={12}>
          <Text fontSize={15} semiBold color={COLORS.black2}>
            Sản phẩm liên quan
          </Text>
          <Block marginTop={15} row wrap columnGap={10} rowGap={12}>
            {detailProduct?.related?.map(item => (
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
      <Block
        absolute
        bottom={0}
        backgroundColor={COLORS.white}
        width={width}
        padding={12}
        shadow3>
        <Block row gap={10}>
          <Pressable
            onPress={() => addToCart(detailProduct?.item_id)}
            width={(width - 34) / 2}
            height={48}
            radius={8}
            backgroundColor={COLORS.darkRed1}
            justifyCenter
            alignCenter>
            <Text fontSize={15} regular color={COLORS.white}>
              Thêm vào giỏ hàng
            </Text>
          </Pressable>
          <Pressable
            onPress={() => buyNow(detailProduct?.item_id)}
            width={(width - 34) / 2}
            height={48}
            radius={8}
            backgroundColor={COLORS.red4}
            justifyCenter
            alignCenter>
            <Text fontSize={15} regular color={COLORS.white}>
              Mua ngay
            </Text>
          </Pressable>
        </Block>
      </Block>
      <Modal transparent={true} animationType="fade" visible={showReport}>
        <SafeAreaView style={{flex: 1}}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              backgroundColor: COLORS.transparentColor4,
            }}>
            <Block
              width={width - 24}
              backgroundColor={COLORS.white}
              radius={8}
              paddingBottom={15}>
              <Block marginTop={10}>
                <Text fontSize={15} semiBold color={COLORS.red4} center>
                  Báo cáo sản phẩm
                </Text>
              </Block>
              <Block marginTop={15} gap={10} marginHorizontal={12}>
                <Text fontSize={13} regular color={COLORS.black2}>
                  Nội dung báo cáo <Text color={COLORS.red4}>*</Text>
                </Text>
                <TextInput
                  paddingLeft={16}
                  placeholder={'Nhập nội dung báo cáo '}
                  borderWidth={0.5}
                  borderColor={COLORS.lightGray1}
                  height={41}
                  radius={8}
                  fontSize={13}
                  regular
                  color={COLORS.black2}
                  value={content}
                  onChangeText={setContent}
                />
              </Block>
              <Block marginTop={20} marginHorizontal={12} row gap={10}>
                <Pressable
                  onPress={handleReport}
                  width={(width - 58) / 2}
                  height={41}
                  borderWidth={1}
                  borderColor={COLORS.red4}
                  radius={8}
                  justifyCenter
                  alignCenter>
                  <Text fontSize={15} regular color={COLORS.red4}>
                    Đồng ý
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setShowReport(!showReport)}
                  width={(width - 58) / 2}
                  height={41}
                  backgroundColor={COLORS.red4}
                  radius={8}
                  justifyCenter
                  alignCenter>
                  <Text fontSize={15} regular color={COLORS.white}>
                    Bỏ qua
                  </Text>
                </Pressable>
              </Block>
            </Block>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </Block>
  );
}

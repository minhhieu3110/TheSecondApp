import {getSize, width} from '@responsive';
import {COLORS} from '@theme';
import RadialGradient from 'react-native-radial-gradient';
import {icon} from '@assets';
import {
  Block,
  Text,
  Carousel,
  Image,
  ScrollView,
  Icon,
  StatusBar,
} from '@components';
import Pressable from 'components/base/Pressable';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@actions';
import {ConvertTimeStamp} from '@utils';
import {formatCurrency} from 'utils/helper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function HomeScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_USER_INFO,
    });
    dispatch({
      type: actions.GET_LIST_SERVICE,
    });
    dispatch({
      type: actions.GET_LIST_PROMO,
    });
    dispatch({
      type: actions.GET_NEWS,
    });
    dispatch({
      type: actions.GET_BANNER,
      params: {group: 'banner-home'},
    });
  }, [dispatch]);
  const userInfo = useSelector(state => state.getUserInfo?.data || []);
  const service = useSelector(state => state.getServices?.data || []);
  const promo = useSelector(state => state.getPromo?.data || []);
  const news = useSelector(state => state.getNews?.data || []);
  const banner = useSelector(state => state.getBanner?.data || []);
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

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: COLORS.gray10,
          paddingBottom: 100,
        }}>
        <Block
          width={width}
          paddingBottom={15}
          backgroundColor={COLORS.white}
          paddingTop={15}>
          <Block marginHorizontal={12} row spaceBetween>
            <Block marginTop={3} height={43}>
              <Text
                color={COLORS.red4}
                uppercase={true}
                bold={true}
                fontSize={16}>
                Ứng dụng chăm sóc người già
              </Text>
              <Text color={COLORS.black1} light fontSize={14}>
                Nhỏ cậy Cha, Già cậy SAN
              </Text>
            </Block>
            <Block row spaceBetween width={84}>
              <Pressable
                onPress={() => commonRoot.navigate(router.VOUCHER)}
                width={37}
                height={37}
                radius={8}
                overflow={'hidden'}>
                <RadialGradient
                  colors={COLORS.gradient5}
                  style={{
                    width: 37,
                    height: 37,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    IconType={MaterialCommunityIcons}
                    iconColor={COLORS.white}
                    iconSize={25}
                    iconName={'ticket-percent-outline'}
                  />
                </RadialGradient>
              </Pressable>
              <Pressable
                onPress={() => commonRoot.navigate(router.FAVORITE_STAFF)}
                width={37}
                height={37}
                radius={8}
                overflow={'hidden'}>
                <RadialGradient
                  colors={COLORS.gradient5}
                  style={{
                    width: 37,
                    height: 37,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    IconType={MaterialCommunityIcons}
                    iconColor={COLORS.white}
                    iconSize={25}
                    iconName={'cards-heart-outline'}
                  />
                </RadialGradient>
              </Pressable>
            </Block>
          </Block>
          <Block
            marginHorizontal={12}
            backgroundColor={COLORS.pinkWhite2}
            marginTop={14}
            radius={12}>
            <Block
              marginHorizontal={15}
              marginBottom={14}
              marginTop={11}
              rowCenter
              spaceBetween>
              <Pressable
                rowCenter
                spaceBetween
                gap={12}
                onPress={() => commonRoot.navigate(router.BALANCE)}>
                <Image source={icon.icon_balance} width={28} height={34.71} />
                <Block height={44}>
                  <Text fontSize={15} regular color={COLORS.black1}>
                    Số dư khả dụng
                  </Text>
                  <Text fontSize={14} semiBold color={COLORS.red4}>
                    {formatCurrency(userInfo?.wcoin)}
                  </Text>
                </Block>
              </Pressable>
              <Block height={44} borderWidth={1} borderColor={COLORS.red4} />
              <Pressable
                rowCenter
                spaceBetween
                gap={12}
                onPress={() => commonRoot.navigate(router.ACCUMULATED_POINT)}>
                <Image source={icon.icon_point} width={28} height={34.71} />
                <Block height={44}>
                  <Text fontSize={15} regular color={COLORS.black1}>
                    Điểm tích lũy
                  </Text>
                  <Text fontSize={14} semiBold color={COLORS.red4}>
                    {userInfo?.point} điểm
                  </Text>
                </Block>
              </Pressable>
            </Block>
          </Block>
          <Block
            width={width - 24}
            height={164}
            marginTop={12}
            marginHorizontal={12}
            radius={12}
            overflow="hidden">
            <Carousel
              data={banner || []}
              isDots={false}
              autoPlay={true}
              renderItem={renderItemBanner}
              containerStyle={{width: '100%', height: '100%'}}
            />
          </Block>
        </Block>
        <Block
          marginTop={15}
          marginHorizontal={12}
          radius={15}
          backgroundColor={COLORS.white}>
          <Text
            fontSize={16}
            bold
            color={COLORS.black2}
            marginTop={18}
            marginLeft={15}>
            Dịch vụ
          </Text>
          <Block
            marginHorizontal={15}
            marginTop={13}
            row
            wrap
            columnGap={30}
            rowGap={28}>
            {service?.map(item => (
              <Pressable
                onPress={() =>
                  commonRoot.navigate(router.ADDRESS, {
                    service_id: item.item_id,
                    service: item.name_service,
                  })
                }
                width={'45%'}
                key={item.item_id}
                alignCenter>
                <Image
                  source={{uri: item.picture}}
                  width={100}
                  height={105.68}
                />
                <Text
                  fontSize={16}
                  semiBold
                  color={COLORS.red4}
                  uppercase
                  marginTop={10}>
                  {item.title_small}
                </Text>
                <Text
                  marginTop={9}
                  fontSize={16}
                  regular
                  color={COLORS.black2}
                  center>
                  {item.title}
                </Text>
              </Pressable>
            ))}
          </Block>
          <Pressable
            onPress={() => commonRoot.navigate(router.SHOPPING)}
            marginTop={27.9}
            backgroundColor={COLORS.pinkWhite2}
            borderBottomRadius={15}
            paddingBottom={14.1}>
            <Block rowCenter gap={12} marginHorizontal={14} marginTop={6.7}>
              <Image source={icon.icon_shop_home} width={119} height={91.26} />
              <Block width={'65%'}>
                <Text fontSize={16} semiBold color={COLORS.red4} uppercase>
                  e-shop
                </Text>
                <Text fontSize={15} regular color={COLORS.black2}>
                  Mua sắm online chất lượng, giá tốt được nhiều người tin dùng
                </Text>
              </Block>
            </Block>
          </Pressable>
        </Block>

        <Block marginTop={20} width={width} height={723}>
          <Block width={width - 24} left={12} rowCenter spaceBetween>
            <Text fontSize={16} semiBold color={COLORS.black1}>
              Ưu đãi
            </Text>
            <Text
              onPress={() => commonRoot.navigate(router.ALL_PROMO)}
              fontSize={13}
              regular
              color={COLORS.red4}>
              Xem tất cả
            </Text>
          </Block>
          <Block>
            <ScrollView
              contentContainerStyle={{
                columnGap: 12,
                flexDirection: 'row',
                marginTop: 15,
                paddingHorizontal: 12,
              }}
              horizontal>
              {promo?.slice(0, 3)?.map(item => (
                <Pressable
                  onPress={() =>
                    commonRoot.navigate(router.DETAIL_PROMO, {
                      item_id: item.item_id,
                    })
                  }
                  width={196}
                  rowGap={11}
                  key={item.item_id}>
                  <Image
                    source={{uri: item.picture}}
                    width={196}
                    height={196}
                    resizeMode="cover"
                    radius={12}
                  />
                  <Text
                    fontSize={15}
                    semiBold
                    uppercase
                    color={COLORS.black1}
                    numberOfLines={2}>
                    ưu đãi:{' '}
                    <Text capitalize regular>
                      {item.title}
                    </Text>
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </Block>
          <Block marginTop={24} width={width} backgroundColor={COLORS.white}>
            <Block
              marginLeft={12}
              marginTop={17.8}
              rowCenter
              spaceBetween
              width={width - 24}>
              <Text fontSize={16} bold color={COLORS.black1}>
                Tin tức
              </Text>
              <Text
                onPress={() => commonRoot.navigate(router.ALL_NEWS)}
                fontSize={13}
                regular
                color={COLORS.red4}
                marginRight={3}>
                Xem tất cả
              </Text>
            </Block>
            <Block
              width={width - 24}
              marginTop={12.3}
              marginHorizontal={12}
              marginBottom={15}
              gap={12}>
              {news?.slice(0, 3)?.map(item => (
                <Pressable
                  onPress={() =>
                    commonRoot.navigate(router.DETAIL_NEW, {
                      item_id: item.item_id,
                    })
                  }
                  rowCenter
                  height={113}
                  key={item.item_id}>
                  <Image
                    source={{uri: item.picture}}
                    width={150}
                    height={113}
                    resizeMode="cover"
                    radius={10}
                  />
                  <Block width={'62%'} paddingLeft={10}>
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
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}

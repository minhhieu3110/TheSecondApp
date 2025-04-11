import {height, width} from '@responsive';
import {COLORS, FONTS} from '@theme';
import RadialGradient from 'react-native-radial-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {icon, image} from '@assets';
import {Block, Text, Carousel, Image, ScrollView} from '@components';
import Pressable from 'components/base/Pressable';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
import {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '@actions';
export default function HomeScreen() {
  const imageTopHome = [
    {
      id: 1,
      image: `${image.image_top_home_1}`,
    },
    {id: 2, image: `${image.image_top_home_2}`},
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.GET_LIST_SERVICE,
    });
    dispatch({
      type: actions.GET_LIST_PROMO,
    });
  }, []);
  const service = useSelector(state => state.getServices?.data || []);
  const serviceReverse = service.reverse();
  const promo = useSelector(state => state.getPromo?.data || []);
  console.log('---');
  console.log(promo);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
          backgroundColor: COLORS.gray10,
          paddingBottom: 1700,
        }}>
        <Block width={width} height={337} backgroundColor={COLORS.white}>
          <Block width={width - 24} height={46} row left={12}>
            <Block marginTop={3} height={43}>
              <Text
                color={COLORS.red4}
                uppercase={true}
                bold={true}
                fontSize={16}>
                Ứng dụng chăm sóc người già
              </Text>
              <Text color={COLORS.black1} light={true} fontSize={14}>
                Nhỏ cậy Cha, Già cậy SAN
              </Text>
            </Block>
            <Block absolute={true} right={0} row spaceBetween width={84}>
              <Pressable onPress={() => commonRoot.navigate(router.VOUCHER)}>
                <Image source={icon.icon_percent} width={37} height={37} />
              </Pressable>
              <Pressable
                onPress={() => commonRoot.navigate(router.FAVORITE_STAFF)}>
                <Image source={icon.icon_heart} width={37} height={37} />
              </Pressable>
            </Block>
          </Block>
          <Block
            width={width - 24}
            height={69}
            radius={12}
            backgroundColor={COLORS.pinkWhite2}
            row
            left={12}
            top={14}
            alignCenter>
            <Block
              left={15}
              row
              height={38}
              spaceBetween
              width={width - 288}
              alignCenter>
              <Image source={icon.icon_balance} width={28} height={34.48} />
              <Pressable
                onPress={() => commonRoot.navigate(router.BALANCE)}
                spaceBetween
                width={width - 328}>
                <Text fontSize={14} regular color={COLORS.black1}>
                  Số dư khả dụng
                </Text>
                <Text fontSize={14} semiBold color={COLORS.red4}>
                  3.000.000 đ
                </Text>
              </Pressable>
            </Block>
            <Block
              height={44}
              borderWidth={1}
              borderColor={COLORS.red4}
              marginLeft={47.5}
              marginRight={15}
            />
            <Block
              left={15}
              row
              height={38}
              spaceBetween
              width={width - 306.5}
              alignCenter>
              <Image source={icon.icon_point} width={28} height={34.71} />
              <Pressable
                onPress={() => commonRoot.navigate(router.ACCUMULATED_POINT)}
                spaceBetween>
                <Text fontSize={14} regular color={COLORS.black1}>
                  Điểm tích luỹ
                </Text>
                <Text fontSize={14} semiBold color={COLORS.red4}>
                  2500 điểm
                </Text>
              </Pressable>
            </Block>
          </Block>
          <Block width={width - 24} height={164} top={26} left={12}>
            <Carousel
              data={imageTopHome}
              duration={2000}
              isDots={false}
              itemHeight={164}
              itemWidth={width - 68}
              renderItem={(item, index) => (
                <Block
                  key={index}
                  width={width - 68}
                  height={164}
                  marginRight={10}>
                  <Image
                    source={{
                      uri: 'https://static.wikia.nocookie.net/bach-khoa-the-gioi-toan-thu/images/e/e4/Son_goku.png/revision/latest?cb=20211030082932',
                    }}
                    resizeMode="cover"
                    width={'100%'}
                    height={'100%'}
                  />
                </Block>
              )}
            />
          </Block>
        </Block>
        <Block
          marginTop={15}
          marginHorizontal={12}
          radius={15}
          backgroundColor={COLORS.white}
          width={width - 24}
          height={547}>
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
            {serviceReverse.map(item => (
              <Pressable
                onPress={() =>
                  commonRoot.navigate(router.ADDRESS, {
                    service: item.name_service,
                  })
                }
                width={(width - 84) / 2}
                height={175.56}
                key={item.item_id}
                alignCenter>
                <Block
                  width={100}
                  height={105.56}
                  radius={12}
                  backgroundColor={COLORS.pinkWhite2}
                  justifyCenter
                  alignCenter>
                  <Image
                    source={{uri: item.picture}}
                    width={72}
                    height={83.46}
                  />
                </Block>
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
            width={width - 24}
            backgroundColor={COLORS.pinkWhite2}
            borderBottomLeftRadius={15}
            borderBottomRightRadius={15}
            paddingBottom={14.1}>
            <Block row marginTop={6.7} marginHorizontal={14} columnGap={12}>
              <Block width={119} height={91.26} alignCenter>
                <Image
                  source={icon.icon_shop_home}
                  width={119}
                  height={91.26}
                />
              </Block>
              <Block marginTop={24.8} width={width - 183}>
                <Text fontSize={16} semiBold color={COLORS.red4} uppercase>
                  e-shop
                </Text>
                <Text
                  fontSize={15}
                  regular
                  color={COLORS.black2}
                  numberOfLines={2}>
                  Mua sắm online chất lượng, giá tốt được nhiều người tin dùng
                </Text>
              </Block>
            </Block>
          </Pressable>
        </Block>
        <Block marginTop={20} width={width} height={723}>
          <Block width={width - 24} left={12} row spaceBetween>
            <Text fontSize={16} semiBold color={COLORS.black1}>
              Ưu đãi
            </Text>
            <Text fontSize={13} regular color={COLORS.red4}>
              Xem tất cả
            </Text>
          </Block>
          <Block>
            <ScrollView
              contentContainerStyle={{
                columnGap: 12,
                flexDirection: 'row',
                marginTop: 15,
                left: 12,
              }}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {promo.map(item => (
                <Block width={width - 232} rowGap={11} key={item.item_id}>
                  <Block
                    width={width - 232}
                    height={196}
                    radius={12}
                    overflow={'hidden'}>
                    <Image
                      source={{uri: item.picture}}
                      width={width - 232}
                      height={196}
                    />
                  </Block>
                  <Text fontSize={15} semiBold uppercase color={COLORS.black1}>
                    ưu đãi:{' '}
                    <Text capitalize regular>
                      {item.title}
                    </Text>
                  </Text>
                </Block>
              ))}
            </ScrollView>
            {/* <Block marginTop={15} marginHorizontal={12}>
              <ScrollView
                horizontal
                contentContainerStyle={{
                  width: width - 24,
                  height: 244,
                  gap: 12,
                }}>
                {promo.map(item => (
                  <Block
                    width={(width - 36) / 2}
                    height={244}
                    key={item.item_id}>
                    <Block
                      width={(width - 36) / 2}
                      height={(width - 36) / 2}
                      radius={12}
                      overflow={'hidden'}>
                      <Image
                        source={{uri: item.picture}}
                        width={(width - 36) / 2}
                        height={(width - 36) / 2}
                      />
                    </Block>
                    <Text
                      fontSize={15}
                      semiBold
                      uppercase
                      color={COLORS.black1}>
                      ưu đãi:{' '}
                      <Text capitalize regular>
                        {item.title}
                      </Text>
                    </Text>
                  </Block>
                ))}
              </ScrollView>
            </Block> */}
          </Block>
          <Block
            marginTop={24}
            width={width}
            height={424}
            backgroundColor={COLORS.white}>
            <Block
              marginLeft={12}
              marginTop={17.8}
              row
              spaceBetween
              width={width - 24}>
              <Text fontSize={16} bold color={COLORS.black1}>
                Tin tức
              </Text>
              <Text fontSize={13} regular color={COLORS.red4} marginRight={3}>
                Xem tất cả
              </Text>
            </Block>
            <Block
              width={width - 24}
              height={363}
              marginTop={12.3}
              marginHorizontal={12}
              marginBottom={15}
              gap={12}>
              {Array.from({length: 3}).map((_, index) => (
                <Block row spaceBetween height={113} key={index}>
                  <Block width={width - 278} height={113}>
                    <Image
                      source={image.image_new}
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover',
                        borderRadius: 10,
                      }}
                    />
                  </Block>
                  <Block
                    marginLeft={10}
                    marginTop={17.9}
                    width={width - 184}
                    height={61.08}>
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
                        22/01/2024
                      </Text>
                    </Block>
                    <Text
                      marginTop={10}
                      fontSize={15}
                      medium
                      color={COLORS.black1}>
                      Người già muốn khỏe mạnh hãy áp dụng chế độ ăn này
                    </Text>
                  </Block>
                </Block>
              ))}
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}

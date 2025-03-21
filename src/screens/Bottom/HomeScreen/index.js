import {View, SafeAreaView, Image, ScrollView} from 'react-native';
import {height, width} from '@responsive';
import {COLORS, FONTS} from '@theme';
import RadialGradient from 'react-native-radial-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {icon, image} from '@assets';
import {Block, Text, Carousel} from '@components';
import Pressable from 'components/base/Pressable';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';
export default function HomeScreen() {
  const imageTopHome = [
    {
      id: 1,
      image: `${image.image_top_home_1}`,
    },
    {id: 2, image: `${image.image_top_home_2}`},
  ];
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
                <Image source={icon.icon_percent} />
              </Pressable>
              <Pressable
                onPress={() => commonRoot.navigate(router.FAVORITE_STAFF)}>
                <Image source={icon.icon_heart} />
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
              <Image source={icon.icon_balance} />
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
              <Image source={icon.icon_point} />
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
          width={width - 24}
          height={547}
          left={12}
          radius={15}
          backgroundColor={COLORS.white}
          marginTop={15}>
          <Text
            color={COLORS.black1}
            marginLeft={15}
            marginTop={18}
            bold
            fontSize={16}>
            Dịch vụ
          </Text>
          <Block width={width - 54} height={360.11} marginLeft={15}>
            <Block row spaceBetween marginTop={13}>
              <Pressable
                onPress={() =>
                  commonRoot.navigate(router.ADDRESS, {service: 'elederly'})
                }
                width={width - 256}
                height={175.56}
                alignCenter>
                <Block
                  width={width - 328}
                  height={105.56}
                  radius={12}
                  backgroundColor={COLORS.pinkWhite2}
                  justifyCenter
                  alignCenter>
                  <Image source={icon.icon_grandmother} />
                </Block>
                <Text
                  fontSize={16}
                  semiBold
                  color={COLORS.red4}
                  uppercase
                  lineHeight={19}
                  marginTop={10}>
                  San pro
                </Text>
                <Text
                  fontSize={16}
                  regular
                  color={COLORS.black1}
                  marginTop={9}
                  lineHeight={19}
                  center>
                  Chăm sóc người già tại nhà
                </Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  commonRoot.navigate(router.ADDRESS, {service: 'sicker'})
                }
                width={width - 256}
                height={175.56}
                alignCenter>
                <Block
                  width={width - 328}
                  height={105.56}
                  radius={12}
                  backgroundColor={COLORS.pinkWhite2}
                  justifyCenter
                  alignCenter>
                  <Image source={icon.icon_patient_1} />
                </Block>
                <Text
                  fontSize={16}
                  semiBold
                  color={COLORS.red4}
                  uppercase
                  lineHeight={19}
                  marginTop={10}>
                  San
                </Text>
                <Text
                  fontSize={16}
                  regular
                  color={COLORS.black1}
                  marginTop={9}
                  lineHeight={19}
                  center>
                  Chăm người bệnh tại nhà
                </Text>
              </Pressable>
            </Block>
            <Block row spaceBetween marginTop={28.6}>
              <Pressable
                onPress={() =>
                  commonRoot.navigate(router.ADDRESS, {
                    service: 'physical_therapy',
                  })
                }
                width={width - 256}
                height={156}
                alignCenter>
                <Block
                  width={width - 328}
                  height={105.56}
                  radius={12}
                  backgroundColor={COLORS.pinkWhite2}
                  justifyCenter
                  alignCenter>
                  <Image source={icon.icon_patient} />
                </Block>
                <Text
                  fontSize={16}
                  semiBold
                  color={COLORS.red4}
                  uppercase
                  lineHeight={19}
                  marginTop={10}>
                  San
                </Text>
                <Text
                  fontSize={16}
                  regular
                  color={COLORS.black1}
                  marginTop={9}
                  lineHeight={19}
                  center>
                  Vật lý trị liệu tại nhà
                </Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  commonRoot.navigate(router.ADDRESS, {service: 'housework'})
                }
                width={width - 256}
                height={156}
                alignCenter>
                <Block
                  width={width - 328}
                  height={105.56}
                  radius={12}
                  backgroundColor={COLORS.pinkWhite2}
                  justifyCenter
                  alignCenter>
                  <Image source={icon.icon_maid} />
                </Block>
                <Text
                  fontSize={16}
                  semiBold
                  color={COLORS.red4}
                  uppercase
                  lineHeight={19}
                  marginTop={10}>
                  San
                </Text>
                <Text
                  fontSize={16}
                  regular
                  color={COLORS.black1}
                  marginTop={9}
                  lineHeight={19}
                  center>
                  San sẻ việc nhà
                </Text>
              </Pressable>
            </Block>
          </Block>
          <Block
            absolute
            bottom={0}
            width={width - 24}
            height={112}
            backgroundColor={COLORS.pinkWhite2}
            borderBottomLeftRadius={15}
            borderBottomRightRadius={15}
            justifyCenter
            alignCenter>
            <Block
              width={width - 52}
              height={85.44}
              justifyCenter
              alignCenter
              row>
              <Image source={icon.icon_shop_home} />
              <Block width={width - 183} height={55} spaceBetween>
                <Text semiBold fontSize={16} uppercase color={COLORS.red4}>
                  e-shop
                </Text>
                <Text regular fontSize={14} color={COLORS.black1}>
                  Mua sắm online chất lượng, giá tốt được nhiều người tin dùng
                </Text>
              </Block>
            </Block>
          </Block>
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
              <Block width={width - 232} rowGap={11}>
                <Block
                  width={width - 232}
                  height={196}
                  radius={12}
                  backgroundColor={'#fff'}>
                  <Image
                    source={image.image_sr_1}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'cover',
                      borderRadius: 12,
                    }}
                  />
                </Block>
                <Text fontSize={15} semiBold uppercase color={COLORS.black1}>
                  ưu đãi:{' '}
                  <Text capitalize regular>
                    Tặng máy xay tỏi cho dịch vụ từ 1000K
                  </Text>
                </Text>
              </Block>
              <Block width={width - 232} rowGap={11}>
                <Block
                  width={width - 232}
                  height={196}
                  radius={12}
                  backgroundColor={'#fff'}>
                  <Image
                    source={image.image_sr_2}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'cover',
                      borderRadius: 12,
                    }}
                  />
                </Block>
                <Text fontSize={15} semiBold uppercase color={COLORS.black1}>
                  ưu đãi:{' '}
                  <Text capitalize regular>
                    199 suất vật lý trị lieu tại nhà năm 2024
                  </Text>
                </Text>
              </Block>
              <Block width={width - 232} rowGap={11}>
                <Block
                  width={width - 232}
                  height={196}
                  radius={12}
                  backgroundColor={'#fff'}>
                  <Image
                    source={image.image_sr_1}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'cover',
                      borderRadius: 12,
                    }}
                  />
                </Block>
                <Text fontSize={15} semiBold uppercase color={COLORS.black1}>
                  ưu đãi:{' '}
                  <Text capitalize regular>
                    Tặng máy xay tỏi cho dịch vụ từ 1000K
                  </Text>
                </Text>
              </Block>
              <Block width={width - 232} rowGap={11}>
                <Block
                  width={width - 232}
                  height={196}
                  radius={12}
                  backgroundColor={'#fff'}>
                  <Image
                    source={image.image_sr_2}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'cover',
                      borderRadius: 12,
                    }}
                  />
                </Block>
                <Text fontSize={15} semiBold uppercase color={COLORS.black1}>
                  ưu đãi:{' '}
                  <Text capitalize regular>
                    199 suất vật lý trị lieu tại nhà năm 2024
                  </Text>
                </Text>
              </Block>
            </ScrollView>
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
              rowGap={12}>
              <Block row spaceBetween height={113}>
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
                    <Image source={icon.icon_calendar} />
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
              <Block row spaceBetween height={113}>
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
                    <Image source={icon.icon_calendar} />
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
              <Block row spaceBetween height={113}>
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
                    <Image source={icon.icon_calendar} />
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
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}

import {Block, Carousel, Icon, Image, Pressable, Text} from '@components';
import {COLORS} from '@theme';
import {ScrollView} from 'react-native';
import {icon, image} from '@assets';
import {width} from '@responsive';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import router from '@router';
import RadialGradient from 'react-native-radial-gradient';
export default function ShoppingScreen() {
  const imageTopHome = [
    {
      id: 1,
      image: `${image.image_top_home_1}`,
    },
    {id: 2, image: `${image.image_top_home_2}`},
  ];
  const dataCategory = [
    {
      id: 1,
      title: 'Phục hồi chức năng',
      image: `${image.image_cate_1}`,
      height: '164',
    },
    {
      id: 2,
      title: 'Dụng cụ y tế',
      image: `${image.image_cate_2}`,
      height: '127',
    },
    {
      id: 3,
      title: 'Giường Massage',
      image: `${image.image_cate_3}`,
      height: '164',
    },
    {
      id: 4,
      title: 'Thiết bị vật lý trị liệu',
      image: `${image.image_cate_4}`,
      height: '127',
    },
    {
      id: 5,
      title: 'Máy đo thính lực',
      image: `${image.image_cate_5}`,
      height: '165',
    },
    {
      id: 6,
      title: 'Thực phẩm chức năng',
      image: `${image.image_cate_6}`,
      height: '127',
    },
  ];
  return (
    <Block flex backgroundColor={COLORS.gray10} marginBottom>
      <ScrollView contentContainerStyle={{paddingBottom: 135}}>
        <Block height={197}>
          <Carousel
            data={imageTopHome}
            dotInside={true}
            dotStyles={{width: 8, height: 8}}
            dotContainerStyles={{marginTop: -37}}
            duration={2000}
            itemHeight={197}
            itemWidth={width}
            renderItem={(item, index) => (
              <Block key={index} width={width} height={197}>
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
              <Block width={44} marginLeft={10} row>
                <Image source={icon.icon_cart} width={35} height={35} />
                <Block
                  absolute
                  top={3}
                  right={0}
                  backgroundColor={COLORS.red4}
                  radius={8}
                  paddingBottom={2}
                  width={26}
                  height={15}
                  justifyCenter
                  alignCenter>
                  <Text fontSize={10} regular color={COLORS.white}>
                    99+
                  </Text>
                </Block>
              </Block>
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
              <Block marginHorizontal={12} marginTop={12} row columnGap={10}>
                <Block width={(width - 48) / 5 - 8.5} alignCenter>
                  <Block
                    width={62}
                    height={62}
                    backgroundColor={COLORS.pinkWhite3}
                    justifyCenter
                    alignCenter
                    radius={12}>
                    <Image
                      source={icon.icon_shopping_new}
                      width={33}
                      height={33}
                    />
                  </Block>
                  <Text
                    marginTop={15.6}
                    fontSize={12}
                    regular
                    color={COLORS.black2}
                    center>
                    Mới
                  </Text>
                </Block>
                <Block width={(width - 48) / 5 - 8.5} alignCenter>
                  <Block
                    width={62}
                    height={62}
                    backgroundColor={COLORS.pinkWhite3}
                    justifyCenter
                    alignCenter
                    radius={12}>
                    <Image
                      source={icon.icon_shopping_confirm}
                      width={33}
                      height={33}
                    />
                  </Block>
                  <Text
                    marginTop={15.6}
                    fontSize={12}
                    regular
                    color={COLORS.black2}
                    center>
                    Xác nhận
                  </Text>
                </Block>
                <Block width={(width - 48) / 5 - 8.5} alignCenter>
                  <Block
                    width={62}
                    height={62}
                    backgroundColor={COLORS.pinkWhite3}
                    justifyCenter
                    alignCenter
                    radius={12}>
                    <Image
                      source={icon.icon_shipping}
                      width={41.68}
                      height={33}
                    />
                  </Block>
                  <Text
                    marginTop={15.6}
                    fontSize={12}
                    regular
                    color={COLORS.black2}
                    center>
                    Đang giao
                  </Text>
                </Block>
                <Block width={(width - 48) / 5 - 8.5} alignCenter>
                  <Block
                    width={62}
                    height={62}
                    backgroundColor={COLORS.pinkWhite3}
                    justifyCenter
                    alignCenter
                    radius={12}>
                    <Image
                      source={icon.icon_shopping_complete}
                      width={33}
                      height={33}
                    />
                  </Block>
                  <Text
                    marginTop={15.6}
                    fontSize={12}
                    regular
                    color={COLORS.black2}
                    center>
                    Đã giao
                  </Text>
                </Block>
                <Block width={(width - 48) / 5 - 8.5} alignCenter>
                  <Block
                    width={62}
                    height={62}
                    backgroundColor={COLORS.pinkWhite3}
                    justifyCenter
                    alignCenter
                    radius={12}>
                    <Image
                      source={icon.icon_shopping_cancel}
                      width={33}
                      height={33}
                    />
                  </Block>
                  <Text
                    marginTop={15.6}
                    fontSize={12}
                    regular
                    color={COLORS.black2}
                    center>
                    Đã huỷ
                  </Text>
                </Block>
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
          <Block marginTop={15} marginHorizontal={12} row wrap gap={10}>
            {dataCategory.map(item => (
              <Pressable
                onPress={() => commonRoot.navigate(router.PRODUCT_OF_CATEGORY)}
                key={item.id}
                width={(width - 24 - 20) / 3}
                height={item.height}
                radius={5}
                // absoluteFillObject
                overflow={'hidden'}>
                <Image source={item.image} width={'100%'} height={'100%'} />
                <LinearGradient
                  colors={COLORS.gradient6}
                  width={(width - 24) / 3 - 7.5}
                  height={item.height}
                  style={{
                    position: 'absolute',
                    opacity: 0.8,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <Text
                    fontSize={15}
                    semiBold
                    color={COLORS.white}
                    uppercase
                    marginLeft={11}
                    marginBottom={12}
                    marginRight={13}
                    numberOfLines={2}>
                    {item.title}
                  </Text>
                </LinearGradient>
              </Pressable>
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
            {Array.from({length: 4}).map((_, index) => (
              <Block
                key={index}
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
                    source={image.image_product}
                    width={'100%'}
                    height={'100%'}
                  />
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
                        -10%
                      </Text>
                    </RadialGradient>
                  </Block>
                </Block>
                <Block marginTop={10} marginHorizontal={10}>
                  <Text
                    fontSize={15}
                    semiBold
                    color={COLORS.black2}
                    lineHeight={22}
                    numberOfLines={2}>
                    Máy chiếu sóng Terahertz trị liệu
                  </Text>
                  <Text
                    fontSize={15}
                    semiBold
                    color={COLORS.red4}
                    lineHeight={17}
                    marginTop={18}>
                    14.000.000đ
                  </Text>
                  <Text
                    fontSize={11}
                    regular
                    color={COLORS.placeholder}
                    lineThrough
                    marginTop={12}>
                    16.000.000đ
                  </Text>
                </Block>
              </Block>
            ))}
          </Block>
          <Block marginTop={10} height={164}>
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
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={20}>
            Gợi ý cho bạn
          </Text>
          <Block marginTop={15} row wrap columnGap={10} rowGap={12}>
            {Array.from({length: 10}).map((_, index) => (
              <Block
                key={index}
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
                    source={image.image_product}
                    width={'100%'}
                    height={'100%'}
                  />
                </Block>
                <Block marginTop={10} marginHorizontal={10}>
                  <Text
                    fontSize={15}
                    semiBold
                    color={COLORS.black2}
                    lineHeight={22}
                    numberOfLines={2}>
                    Máy chiếu sóng Terahertz trị liệu
                  </Text>
                  <Text
                    fontSize={15}
                    semiBold
                    color={COLORS.red4}
                    lineHeight={17}
                    marginTop={18}>
                    14.000.000đ
                  </Text>
                </Block>
              </Block>
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

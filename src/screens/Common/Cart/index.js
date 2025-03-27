import {image} from '@assets';
import {
  Block,
  ButtonSubmitService,
  HeaderTitle,
  Icon,
  Image,
  Pressable,
  Text,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {useState} from 'react';
import {ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {formatCurrency} from 'utils';
export default function Cart() {
  const cart = [
    {
      id: 1,
      image: `${image.image_san}`,
      name: 'Máy chiếu sóng Terahertz trị liệu',
      price: '100000000',
      priceDiscount: '',
      quantity: 5,
    },
    {
      id: 2,
      image: `${image.image_san}`,
      name: 'Xe đạp tập thể dục OKACHI JP-5...',
      price: '40990000',
      priceDiscount: '40290000',
      quantity: 5,
    },
  ];
  const [count, setCount] = useState(1);
  const [chooseProducts, setChooseProducts] = useState([]);
  const handleChooseAll = () => {
    if (chooseProducts.length === cart.length) {
      setChooseProducts([]);
    } else {
      setChooseProducts(cart.map(item => item.id));
    }
  };

  const handleChoose = id => {
    setChooseProducts(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      return [...prev, id];
    });
  };
  const totalPrice = chooseProducts.reduce((acc, id) => {
    const selectedItem = cart.find(item => item.id === id);
    return acc + parseFloat(selectedItem.price);
  }, 0);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle
        root={commonRoot}
        screenName={router.SHOPPING}
        title={'Giỏ hàng'}
      />
      <ScrollView contentContainerStyle={{paddingBottom: 208}}>
        <Block marginTop={16} marginHorizontal={12}>
          <Pressable onPress={handleChooseAll} row alignCenter>
            <Icon
              IconType={
                chooseProducts.length === cart.length ? AntDesign : Feather
              }
              iconSize={22}
              iconColor={
                chooseProducts.length === cart.length
                  ? COLORS.red4
                  : COLORS.lightGray1
              }
              iconName={
                chooseProducts.length === cart.length ? 'checksquare' : 'square'
              }
            />
            <Text fontSize={15} regular color={COLORS.black2} marginLeft={12}>
              Chọn tất cả
            </Text>
          </Pressable>
          <Block marginTop={12} gap={12}>
            {cart.map(item => (
              <Pressable
                padding={12}
                backgroundColor={COLORS.white}
                radius={8}
                key={item.id}>
                <Block row>
                  <Pressable
                    onPress={() => handleChoose(item.id)}
                    marginTop={25}>
                    <Icon
                      IconType={
                        chooseProducts.includes(item.id) ? AntDesign : Feather
                      }
                      iconSize={22}
                      iconColor={
                        chooseProducts.includes(item.id)
                          ? COLORS.red4
                          : COLORS.lightGray1
                      }
                      iconName={
                        chooseProducts.includes(item.id)
                          ? 'checksquare'
                          : 'square'
                      }
                    />
                  </Pressable>
                  <Block marginHorizontal={12} row gap={12}>
                    <Block
                      width={73}
                      height={73}
                      radius={5}
                      overflow={'hidden'}>
                      <Image
                        source={image.image_san}
                        height={'100%'}
                        width={'100%'}
                        resizeMode="cover"
                      />
                    </Block>
                    <Block marginTop={3} marginRight={12} width={width - 167}>
                      <Text
                        lineHeight={17}
                        fontSize={15}
                        medium
                        color={COLORS.black2}
                        numberOfLines={1}>
                        {item.name}
                      </Text>
                      <Block row alignCenter marginTop={19} columnGap={20}>
                        {item?.priceDiscount && (
                          <Text
                            fontSize={14}
                            semiBold
                            color={COLORS.red4}
                            lineHeight={17}>
                            {formatCurrency(item?.priceDiscount)}
                          </Text>
                        )}
                        <Text
                          fontSize={14}
                          semiBold={item?.priceDiscount ? false : true}
                          regular={item?.priceDiscount && true}
                          color={
                            item?.priceDiscount
                              ? COLORS.lightGray1
                              : COLORS.red4
                          }
                          lineThrough={item?.priceDiscount ? true : false}
                          lineHeight={17}>
                          {formatCurrency(item.price)}
                        </Text>
                      </Block>
                      <Block
                        marginTop={13}
                        paddingBottom={3.2}
                        shadow3
                        borderColor={COLORS.gray11}
                        borderWidth={0.5}
                        marginRight={173}>
                        <Block
                          marginTop={5.8}
                          marginLeft={7}
                          marginRight={7.3}
                          row
                          alignCenter
                          spaceBetween>
                          <Block>
                            <Icon
                              IconType={Ionicons}
                              iconName={'remove-outline'}
                              iconColor={COLORS.red}
                              iconSize={10.1}
                            />
                          </Block>
                          <Text fontSize={16} regular color={COLORS.black}>
                            1
                          </Text>
                          <Block>
                            <Icon
                              IconType={Ionicons}
                              iconName={'add-outline'}
                              iconColor={COLORS.red}
                              iconSize={10.1}
                            />
                          </Block>
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Pressable>
            ))}
          </Block>
        </Block>
      </ScrollView>
      <ButtonSubmitService
        disable={chooseProducts.length === 0 && true}
        titleBottom={'1 sản phẩm'}
        titleTop={
          <>
            Tổng cộng:{' '}
            <Text color={COLORS.red4}>{formatCurrency(totalPrice)}</Text>
          </>
        }
        onPress={() => commonRoot.navigate(router.PAY_SHOPPING)}
      />
    </Block>
  );
}

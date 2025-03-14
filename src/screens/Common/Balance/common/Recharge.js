import {icon} from '@assets';
import {
  Block,
  Button,
  HeaderTitle,
  Image,
  Pressable,
  Text,
  TextInput,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {useState} from 'react';

export default function Recharge() {
  const rechargeMoney = [
    {id: 1, money: '100.000'},
    {id: 2, money: '200.000'},
    {id: 3, money: '300.000'},
    {id: 4, money: '400.000'},
    {id: 5, money: '500.000'},
    {id: 6, money: '600.000'},
  ];
  const [chooseMoney, setChooseMoney] = useState(null);
  const [money, setMoney] = useState(null);
  const handleChooseMoney = (id, money) => {
    setChooseMoney(id);
    setMoney(money);
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Nạp tiền'} canGoBack />
      <Block
        width={width - 24}
        radius={8}
        backgroundColor={COLORS.white}
        marginLeft={12}
        marginTop={15}
        paddingBottom={12}>
        <Text
          fontSize={15}
          semiBold
          color={COLORS.black1}
          marginTop={17}
          marginLeft={17}>
          Số tiền nạp
        </Text>
        <Block marginLeft={12} marginTop={15} wrap row spaceBetween>
          {rechargeMoney.map(item => (
            <Pressable
              onPress={() => handleChooseMoney(item.id, item.money)}
              key={item.id}
              width={118.67}
              radius={5}
              height={45}
              backgroundColor={
                chooseMoney === item.id ? COLORS.red4 : COLORS.pinkWhite2
              }
              marginRight={12.3}
              marginBottom={12}
              alignCenter
              justifyCenter>
              <Text
                fontSize={14}
                medium
                color={chooseMoney === item.id ? COLORS.white : COLORS.black1}>
                {item.money} đ
              </Text>
            </Pressable>
          ))}
        </Block>
        <Text
          fontSize={15}
          semiBold
          color={COLORS.black1}
          marginTop={20}
          marginLeft={20}>
          Nhập số tiền nạp
        </Text>
        <Block
          row
          alignCenter
          width={width - 48}
          height={48}
          marginTop={15}
          marginLeft={12}>
          <TextInput
            placeholder={'Nhập số tiền cần nạp'}
            width={width - 48}
            borderWidth={1}
            radius={5}
            borderColor={'#f1f1f1'}
            paddingLeft={10}
            color={COLORS.red4}
            onChangeText={text => setMoney(text)}>
            {money}
          </TextInput>
          <Block absolute right={12}>
            <Text fontSize={22} regular color={COLORS.black}>
              đ
            </Text>
          </Block>
        </Block>
      </Block>
      <Block
        width={width - 24}
        backgroundColor={COLORS.white}
        radius={8}
        marginTop={12}
        marginHorizontal={12}
        paddingTop={17}
        paddingBottom={12}>
        <Text fontSize={15} semiBold color={COLORS.black1} marginLeft={20.1}>
          Phương thức nạp tiền
        </Text>
        <Block marginLeft={12} marginTop={18} width={width - 48}>
          <Block row height={23} alignCenter>
            <Block width={25.09} height={21.5}>
              <Image
                source={icon.icon_transfer}
                width={'100%'}
                height={'100%'}
                resizeMode="contain"
              />
            </Block>
            <Text fontSize={15} regular color={COLORS.black1} marginLeft={17}>
              Chuyển khoản
            </Text>
            <Block
              width={23}
              height={23}
              radius={15}
              absolute
              right={0}
              borderWidth={1}
              borderColor={COLORS.placeholder}></Block>
          </Block>
        </Block>
      </Block>
      <Button
        title="Tiếp tục"
        onPress={() => commonRoot.navigate(router.INFO_RECHARGE)}
      />
    </Block>
  );
}

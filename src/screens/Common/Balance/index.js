import {icon, image} from '@assets';
import {Block, HeaderTitle, Image, Pressable, Text} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import {ScrollView} from 'react-native';
export default function Balance() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block
        width={width}
        height={225}
        backgroundColor={COLORS.white}
        alignCenter>
        <HeaderTitle
          background
          screenName={router.PROFILE_SCREEN}
          root={bottomRoot}
          title={'Số dư khả dụng'}
          colorIcon={COLORS.white}
          colorText={COLORS.white}
        />
        <Image
          source={image.image_header_balance}
          width={'100%'}
          height={'100%'}
          resizeMode="cover"
        />
        <Block absolute zIndex={10} top={74} alignCenter>
          <Text fontSize={40} bold color={COLORS.white}>
            30.000.000 đ
          </Text>
          <Text fontSize={14} regular color={COLORS.gray11}>
            Số dư khả dụng
          </Text>
        </Block>
      </Block>
      <Block
        width={width - 24}
        height={112.23}
        backgroundColor={COLORS.white}
        radius={15}
        marginLeft={12}
        marginTop={-64}>
        <Block
          width={width - 48}
          height={64.93}
          row
          alignCenter
          spaceBetween
          marginHorizontal={12}
          marginTop={20}>
          <Pressable
            onPress={() => commonRoot.navigate(router.RECHARGE)}
            width={width - 309}
            alignCenter>
            <Block width={50.32} height={41.07}>
              <Image
                source={icon.icon_recharge}
                width={'100%'}
                height={'100%'}
                resizeMode="contain"
              />
            </Block>
            <Text fontSize={14} regular color={COLORS.black1}>
              Nạp tiền
            </Text>
          </Pressable>
          <Pressable
            onPress={() => commonRoot.navigate(router.WITHDRAW)}
            width={width - 309}
            alignCenter>
            <Block width={50.32} height={41.07}>
              <Image
                source={icon.icon_withdraw}
                width={'100%'}
                height={'100%'}
                resizeMode="contain"
              />
            </Block>
            <Text fontSize={14} regular color={COLORS.black1} center>
              Rút tiền
            </Text>
          </Pressable>
          <Pressable
            onPress={() => commonRoot.navigate(router.HISTORY)}
            width={width - 309}
            alignCenter>
            <Block width={50.32} height={41.07}>
              <Image
                source={icon.icon_transaction_history}
                width={'100%'}
                height={'100%'}
                resizeMode="contain"
              />
            </Block>
            <Text fontSize={14} regular color={COLORS.black1} center>
              Lịch sử
            </Text>
          </Pressable>
        </Block>
      </Block>
      <Text
        fontSize={15}
        semiBold
        color={COLORS.black1}
        marginTop={24.8}
        marginLeft={12}>
        Giao dịch gần đây
      </Text>
      <Block width={width - 24} marginLeft={12} marginTop={15}>
        <ScrollView contentContainerStyle={{paddingBottom: 100}}>
          <Block
            paddingTop={12}
            paddingBottom={15}
            radius={8}
            backgroundColor={COLORS.white}
            marginBottom={12}
            row>
            <Block width={40} height={40} marginLeft={12}>
              <Image
                source={icon.icon_use_service}
                width={'100%'}
                height={'100%'}
                resizeMode="cover"
              />
            </Block>
            <Block marginLeft={12} marginTop={9}>
              <Text fontSize={15} semiBold color={COLORS.textColor}>
                Sử dụng dịch vụ
              </Text>
              <Text fontSize={14} regular color={COLORS.red4} marginTop={16}>
                -2.890.000 đ
              </Text>
              <Text
                width={width - 142}
                fontSize={14}
                regular
                color={COLORS.placeholder}
                numberOfLines={1}
                marginTop={15}>
                Quý khách đã thanh toán dịch vụ Chăm Sóc khach hang
              </Text>
            </Block>
            <Block absolute top={23} right={11}>
              <Text fontSize={14} regular color={COLORS.placeholder}>
                15/12/2024
              </Text>
            </Block>
          </Block>
          <Block
            paddingTop={12}
            paddingBottom={15}
            radius={8}
            backgroundColor={COLORS.white}
            marginBottom={12}
            row>
            <Block width={40} height={40} marginLeft={12}>
              <Image
                source={icon.icon_recharge_success}
                width={'100%'}
                height={'100%'}
                resizeMode="cover"
              />
            </Block>
            <Block marginLeft={12} marginTop={9}>
              <Text fontSize={15} semiBold color={COLORS.textColor}>
                Nạp tiền thành công
              </Text>
              <Text fontSize={14} regular color={COLORS.green5} marginTop={16}>
                +200.000 đ
              </Text>
            </Block>
            <Block absolute top={23} right={11}>
              <Text fontSize={14} regular color={COLORS.placeholder}>
                15/12/2024
              </Text>
            </Block>
          </Block>
          <Block
            paddingTop={12}
            paddingBottom={15}
            radius={8}
            backgroundColor={COLORS.white}
            marginBottom={12}
            row>
            <Block width={40} height={40} marginLeft={12}>
              <Image
                source={icon.icon_withdraw_success}
                width={'100%'}
                height={'100%'}
                resizeMode="cover"
              />
            </Block>
            <Block marginLeft={12} marginTop={9}>
              <Text fontSize={15} semiBold color={COLORS.textColor}>
                Rút tiền thành công
              </Text>
              <Text fontSize={14} regular color={COLORS.red4} marginTop={16}>
                -200.000 đ
              </Text>
            </Block>
            <Block absolute top={23} right={11}>
              <Text fontSize={14} regular color={COLORS.placeholder}>
                15/12/2024
              </Text>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    </Block>
  );
}

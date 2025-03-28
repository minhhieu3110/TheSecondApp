import {image} from '@assets';
import {Block, Image, Text} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {authRoot, bottomRoot} from 'navigation/navigationRef';
import HomeScreen from 'screens/Bottom/HomeScreen';

export default function InputOTP() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block width={width} height={328}>
        <Image
          source={image.image_san}
          width={'100%'}
          height={'100%'}
          resizeMode="cover"
        />
      </Block>
      <Block
        marginTop={-39}
        marginHorizontal={12}
        paddingBottom={148}
        backgroundColor={COLORS.white}
        radius={8}>
        <Block marginTop={18} marginLeft={12}>
          <Text fontSize={18} semiBold color={COLORS.red4}>
            Xác nhận mã OTP
          </Text>
          <Text
            marginTop={10}
            fontSize={15}
            regular
            color={COLORS.black2}
            numberOfLines={2}>
            Một mã xác thực gồm 6 số đã được gửi đến số điện thoại 009 123 456
          </Text>
          <Text fontSize={16} light color={COLORS.black2} marginTop={54} center>
            Nhập mã để tiếp tục
          </Text>
          <Block marginTop={18} row gap={16}>
            {Array.from({length: 6}).map((_, index) => (
              <Block
                key={index}
                width={(width - 128) / 6}
                height={50}
                radius={5}
                backgroundColor={COLORS.blueGray}></Block>
            ))}
          </Block>
          <Text
            marginTop={14.9}
            fontSize={16}
            regular
            color={COLORS.black2}
            center>
            Bạn không nhận được mã?{' '}
            <Text
              onPress={() => authRoot.navigate(router.INPUT_INFORMATION)}
              color={COLORS.red4}
              underlineLineThrough>
              Gửi lại
            </Text>{' '}
            (175s)
          </Text>
        </Block>
      </Block>
    </Block>
  );
}

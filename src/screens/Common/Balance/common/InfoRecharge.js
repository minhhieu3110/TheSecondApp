import {icon, image} from '@assets';
import {
  Block,
  HeaderTitle,
  Image,
  Text,
  Icon,
  Pressable,
  Button,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function InfoRecharge() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTitle title={'Thông tin chuyển khoản'} canGoBack />
      <Block
        width={width - 24}
        radius={8}
        backgroundColor={COLORS.white}
        marginTop={15}
        marginLeft={12}
        paddingBottom={12}
        alignCenter>
        <Text fontSize={15} regular color={COLORS.black1} marginTop={20}>
          Giá trị quý khách cần nạp
        </Text>
        <Text fontSize={22} color={COLORS.red4} semiBold>
          100.000 đ
        </Text>
        <Block
          width={width - 48}
          height={5}
          backgroundColor={COLORS.gray11}
          marginTop={24}
        />
        <Block width={width - 48} marginTop={20}>
          <Text fontSize={15} semiBold color={COLORS.black1} marginLeft={11}>
            Thông tin ngân hàng
          </Text>
          <Block marginTop={22} row spaceBetween>
            <Text fontSize={14} regular color={COLORS.placeholder}>
              Ngân hàng
            </Text>
            <Text fontSize={14} regular color={COLORS.black1}>
              Vietcombank
            </Text>
          </Block>
          <Block marginTop={22} row spaceBetween>
            <Text fontSize={14} regular color={COLORS.placeholder}>
              Chủ tài khoản
            </Text>
            <Text fontSize={14} regular color={COLORS.black1}>
              Công ty TNHH San
            </Text>
          </Block>
          <Block marginTop={18} row spaceBetween>
            <Text fontSize={14} regular color={COLORS.placeholder}>
              Số tài khoản
            </Text>
            <Block row>
              <Text fontSize={14} regular color={COLORS.black1}>
                123456789
              </Text>
              <Pressable marginLeft={9}>
                <Icon
                  IconType={Ionicons}
                  iconName={'copy-outline'}
                  iconColor={COLORS.red4}
                  iconSize={21}
                />
              </Pressable>
            </Block>
          </Block>
          <Block marginTop={15} row spaceBetween>
            <Text fontSize={14} regular color={COLORS.placeholder}>
              Nội dung
            </Text>
            <Block row>
              <Text fontSize={14} regular color={COLORS.black1} uppercase>
                NAPTIENSAN_345KHJM
              </Text>
              <Pressable marginLeft={9}>
                <Icon
                  IconType={Ionicons}
                  iconName={'copy-outline'}
                  iconColor={COLORS.red4}
                  iconSize={21}
                />
              </Pressable>
            </Block>
          </Block>
        </Block>
      </Block>
      <Block
        width={width - 24}
        marginTop={15}
        marginLeft={12}
        paddingBottom={12}
        backgroundColor={COLORS.white}
        row>
        <Block marginTop={20} marginLeft={13.1}>
          <Text fontSize={15} semiBold color={COLORS.black1}>
            QR code chuyển tiền
          </Text>
          <Block
            width={width - 251}
            height={width - 251}
            backgroundColor={COLORS.pinkWhite2}
            marginTop={15}
            radius={10}
            alignCenter
            justifyCenter>
            <Block width={width - 275.5} height={width - 275.5}>
              <Image
                source={image.image_qr_code}
                width={'100%'}
                height={'100%'}
                resizeMode="contain"
              />
            </Block>
          </Block>
        </Block>
        <Block marginTop={20} marginLeft={13.1}>
          <Text fontSize={15} semiBold color={COLORS.black1}>
            Hình ảnh biên lai
          </Text>
          <Block
            width={width - 251}
            height={width - 251}
            backgroundColor={COLORS.pinkWhite2}
            marginTop={15}
            radius={10}
            borderDashed
            borderColor={COLORS.red4}
            borderWidth={1}
            justifyCenter
            alignCenter>
            <Block width={47} height={47}>
              <Image
                source={icon.icon_upload_image}
                width={'100%'}
                height={'100%'}
                resizeMode="contain"
              />
            </Block>
            <Text fontSize={16} regular color={COLORS.black1} marginTop={16}>
              Ảnh chuyển tiền
            </Text>
          </Block>
        </Block>
      </Block>
      <Button title="Gửi lệnh" />
    </Block>
  );
}

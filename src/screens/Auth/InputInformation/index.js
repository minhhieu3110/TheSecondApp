import {icon, image} from '@assets';
import {Block, Image, Pressable, Text, TextInput} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import {ScrollView} from 'react-native';

export default function InputInformation() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView contentContainerStyle={{paddingBottom: 67}}>
        <Block width={width} height={328}>
          <Image
            source={image.image_san}
            width={'100%'}
            height={'100%'}
            resizeMode="cover"
          />
        </Block>
        <Block
          paddingBottom={12}
          marginTop={-39}
          marginHorizontal={12}
          backgroundColor={COLORS.white}
          radius={8}>
          <Block marginTop={17} marginHorizontal={12}>
            <Text fontSize={18} semiBold color={COLORS.red4}>
              Điền thông tin
            </Text>
            <Block marginTop={21}>
              <Block marginBottom={17}>
                <Text fontSize={15} semiBold color={COLORS.black3}>
                  Họ tên
                </Text>
                <TextInput
                  height={41}
                  radius={5}
                  borderWidth={0.5}
                  borderColor={COLORS.gray11}
                  paddingLeft={12}
                  color={COLORS.placeholder}
                  fontSize={14}
                  regular
                  marginTop={15}>
                  Lâm Minh Hoàng
                </TextInput>
              </Block>
              <Block marginBottom={17}>
                <Text fontSize={15} semiBold color={COLORS.black3}>
                  Email
                </Text>
                <TextInput
                  height={41}
                  radius={5}
                  borderWidth={0.5}
                  borderColor={COLORS.gray11}
                  paddingLeft={12}
                  color={COLORS.placeholder}
                  fontSize={14}
                  regular
                  marginTop={15}>
                  Hoang1234@gmail.com
                </TextInput>
              </Block>
              <Block marginBottom={17}>
                <Text fontSize={15} semiBold color={COLORS.black3}>
                  Số điện thoại
                </Text>
                <TextInput
                  height={41}
                  radius={5}
                  borderWidth={0.5}
                  borderColor={COLORS.gray11}
                  backgroundColor={COLORS.gray10}
                  paddingLeft={12}
                  color={COLORS.placeholder}
                  fontSize={14}
                  regular
                  marginTop={15}>
                  0909 123 456
                </TextInput>
              </Block>
              <Block marginBottom={17}>
                <Text fontSize={15} semiBold color={COLORS.black3}>
                  Ngày sinh
                </Text>
                <Block row height={41} marginTop={15}>
                  <TextInput
                    width={width - 48}
                    height={41}
                    radius={5}
                    borderWidth={0.5}
                    borderColor={COLORS.gray11}
                    paddingLeft={12}
                    color={COLORS.placeholder}
                    fontSize={14}
                    regular>
                    20/11/2000
                  </TextInput>
                  <Block
                    width={18.3}
                    height={17.13}
                    absolute
                    top={11.9}
                    right={11.9}>
                    <Image
                      source={icon.icon_calendar}
                      width={18.3}
                      height={17.13}
                    />
                  </Block>
                </Block>
              </Block>
              <Block marginBottom={17}>
                <Text fontSize={15} semiBold color={COLORS.black3}>
                  Mã giới thiệu
                </Text>
                <TextInput
                  height={41}
                  radius={5}
                  borderWidth={0.5}
                  borderColor={COLORS.gray11}
                  paddingLeft={12}
                  color={COLORS.placeholder}
                  fontSize={14}
                  regular
                  marginTop={15}
                  placeholder={'Nhập mã giới thiệu'}
                />
              </Block>
            </Block>
            <Pressable
              onPress={() => bottomRoot.navigate(router.HOME_SCREEN)}
              height={48}
              backgroundColor={COLORS.red4}
              radius={8}
              justifyCenter
              alignCenter
              marginTop={30}>
              <Text fontSize={15} regular color={COLORS.white}>
                Hoàn tất
              </Text>
            </Pressable>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}

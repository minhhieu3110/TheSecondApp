import {image} from '@assets';
import {Block, Image, Text, Pressable} from '@components';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import RadialGradient from 'react-native-radial-gradient';

export default function MessageScreen() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block height={53} backgroundColor={COLORS.white}>
        <Text
          marginTop={19}
          marginLeft={12}
          fontSize={15}
          semiBold
          color={COLORS.black2}>
          Tin nhắn
        </Text>
      </Block>
      <Block marginTop={10} marginHorizontal={12} gap={12}>
        <Pressable
          onPress={() => commonRoot.navigate(router.DETAIL_MESSAGE)}
          radius={8}
          backgroundColor={COLORS.white}>
          <Block marginVertical={12} marginLeft={12} row alignCenter>
            <Image
              source={image.image_staff}
              width={60}
              height={60}
              radius={50}
            />
            <Block marginLeft={12}>
              <Text fontSize={15} semiBold color={COLORS.black2}>
                Lê Thu Huyền
              </Text>
              <Text fontSize={14} medium color={COLORS.black2} marginTop={10}>
                Okay anh nha, em sẽ đến đúng giờ
              </Text>
            </Block>
          </Block>
          <Block
            width={12}
            height={12}
            absolute
            top={20}
            right={12}
            radius={50}
            overflow={'hidden'}>
            <RadialGradient
              style={{width: 12, height: 12}}
              colors={COLORS.gradient5}></RadialGradient>
          </Block>
        </Pressable>
        <Block radius={8} backgroundColor={COLORS.white}>
          <Block marginVertical={12} marginLeft={12} row alignCenter>
            <Image
              source={image.image_staff_1}
              width={60}
              height={60}
              radius={50}
            />
            <Block marginLeft={12}>
              <Text fontSize={15} semiBold color={COLORS.black2}>
                Lý Gia Bảo
              </Text>
              <Text
                fontSize={14}
                medium
                color={COLORS.placeholder}
                marginTop={10}>
                Okay anh
              </Text>
            </Block>
          </Block>
          {/* <Block
            width={12}
            height={12}
            absolute
            top={20}
            right={12}
            radius={50}
            overflow={'hidden'}>
            <RadialGradient
              style={{width: 12, height: 12}}
              colors={COLORS.gradient5}></RadialGradient>
          </Block> */}
        </Block>
      </Block>
    </Block>
  );
}

import {image} from '@assets';
import {Block, Text, Icon, Image, Pressable} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {root} from 'navigation/navigationRef';
export default function IntroduceSAN() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView>
        <Block width={width} height={199.6}>
          <Image
            source={image.image_header_intro_san}
            width={width}
            height={199.6}
            resizeMode="cover"
          />
          <Pressable
            onPress={() => root.goBack()}
            width={30}
            height={30}
            radius={50}
            absolute
            top={13}
            left={12}
            backgroundColor={COLORS.black}
            opacity={0.6}>
            <Icon
              IconType={Ionicons}
              iconName={'chevron-back-outline'}
              iconSize={30}
              iconColor={COLORS.white}
            />
          </Pressable>
        </Block>
        <Block
          marginTop={-19.6}
          width={width - 24}
          paddingBottom={27}
          radius={8}
          backgroundColor={COLORS.white}
          marginLeft={12}>
          <Text
            fontSize={18}
            semiBold
            color={COLORS.black1}
            marginLeft={12}
            marginTop={14}
            uppercase>
            Giới thiệu về SAN
          </Text>
          <Text
            fontSize={14}
            regular
            color={COLORS.black1}
            marginLeft={12}
            marginTop={16}
            lineHeight={22}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been industry's standard dummy text ever
            since the 1500s, when anm unknown printer took a galley of type and
            scrambledt it to make a type specimen book. It has survived t only
            five centuries, but also the leap into electritypesetting, remaining
            essentially unchanged. It was popularisn in the 1960s with the
            release of Letraset sheeticontaining Lorem Ipsum passages, and more
            recently wt desktop publishing software like Aldus PageMaker
            incliversions of Lorem Ipsum.
          </Text>
          <Block width={212} height={202} marginHorizontal={96} marginTop={39}>
            <Image
              source={image.image_intro_san}
              width={212}
              height={202}
              resizeMode="cover"
            />
          </Block>
          <Text
            fontSize={14}
            regular
            color={COLORS.black1}
            marginLeft={12}
            marginTop={10}
            lineHeight={22}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been industry's standard dummy text ever
            since the 1500s, when anm unknown printer took a galley of type and
            scrambledt it to make a type specimen book. It has survived t only
            five centuries, but also the leap into electritypesetting, remaining
            essentially unchanged. It was popularisn in the 1960s with the
            release of Letraset sheeticontaining Lorem Ipsum passages, and more
            recently wt desktop publishing software like Aldus PageMaker
            incliversions of Lorem Ipsum.
          </Text>
        </Block>
      </ScrollView>
    </Block>
  );
}

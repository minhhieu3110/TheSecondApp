import {image} from '@assets';
import {Block, Image, Pressable, Text} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {authRoot, commonRoot} from 'navigation/navigationRef';
export default function OnboardingScreen() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block alignCenter>
        <Image
          source={image.image_intro}
          width={'100%'}
          height={'100%'}
          resizeMode="cover"
        />
        <Pressable
          onPress={() => authRoot.navigate(router.LOGIN_SCREEN)}
          backgroundColor={COLORS.yellow3}
          absolute
          bottom={176}
          height={48}
          width={width - 78}
          radius={8}
          justifyCenter
          alignCenter>
          <Text fontSize={15} regular color={COLORS.black2}>
            Đăng nhập
          </Text>
        </Pressable>
      </Block>
    </Block>
  );
}

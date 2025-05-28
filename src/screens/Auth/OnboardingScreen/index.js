import {image} from '@assets';
import {Block, Image, Pressable, Text} from '@components';
import {height, hs, hScale, width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {authRoot, commonRoot} from 'navigation/navigationRef';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
export default function OnboardingScreen() {
  const {top} = useSafeAreaInsets();
  console.log(height - top);

  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Image
        source={image.image_intro}
        width={width}
        height={height}
        flex={1}
        justifyEnd>
        <Pressable
          onPress={() => authRoot.navigate(router.LOGIN_SCREEN)}
          height={48}
          marginHorizontal={39}
          backgroundColor={COLORS.yellow3}
          radius={8}
          justifyCenter
          alignCenter
          marginBottom={172 - top}>
          <Text fontSize={15} regular color={COLORS.black2}>
            Đăng nhập
          </Text>
        </Pressable>
      </Image>
    </Block>
  );
}

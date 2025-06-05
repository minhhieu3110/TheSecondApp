import {image} from '@assets';
import {Block, Image, Pressable, StatusBar, Text} from '@components';
import {height, hs, hScale, width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {authRoot, commonRoot} from 'navigation/navigationRef';
import {ImageBackground} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
export default function OnboardingScreen() {
  const {bottom} = useSafeAreaInsets();

  return (
    <ImageBackground
      style={{width: width, height: '100%', alignItems: 'center'}}
      source={image.image_intro}>
      <StatusBar />
      <Block flex justifyEnd paddingBottom={bottom + 84} width={width}>
        <Pressable
          onPress={() => authRoot.navigate(router.LOGIN_SCREEN)}
          height={48}
          marginHorizontal={39}
          backgroundColor={COLORS.yellow3}
          radius={8}
          justifyCenter
          alignCenter>
          <Text fontSize={15} regular color={COLORS.black2}>
            Đăng nhập
          </Text>
        </Pressable>
      </Block>
    </ImageBackground>
  );
}

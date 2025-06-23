import {image} from '@assets';
import {Block, Image, Pressable, Text, StatusBar} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {authRoot} from 'navigation/navigationRef';
import Swiper from 'react-native-swiper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
export default function IntroSAN() {
  const contentIntro = [
    {
      id: 1,
      title: 'Tận tâm - chu đáo',
      subTitle: 'Mang lại sự thoải mái tối đa cho những người bạn yêu thương',
    },
    {
      id: 2,
      title: 'Linh hoạt - thuận tiện',
      subTitle: 'Linh hoạt và phù hợp với mọi lịch trình của mọi gia đình',
    },
    {
      id: 3,
      title: 'Sống vui - Sống khoẻ',
      subTitle:
        'Các cụ không cần phải đến viện dưỡng lão và có thể sống vui, sum vầy cùng con cháu',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <Block gap={10} paddingBottom={40} justifyEnd flex={1}>
        <Text fontSize={18} semiBold color={COLORS.yellow3} uppercase center>
          {item.title}
        </Text>
        <Text
          fontSize={14}
          light
          color={COLORS.white}
          numberOfLines={2}
          center
          marginHorizontal={29}>
          {item.subTitle}
        </Text>
      </Block>
    );
  };
  const {bottom} = useSafeAreaInsets();
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <Image
        source={image.image_intro_1}
        width={width}
        height={'100%'}
        resizeMode="stretch">
        <StatusBar />
        <Block flex justifyEnd paddingBottom={bottom + 32}>
          <Swiper
            autoplay={true}
            dotColor={COLORS.Yellow3_40}
            activeDotColor={COLORS.yellow3}
            loop={false}
            onMomentumScrollEnd={(e, state) => {
              if (state.index === contentIntro.length - 1) {
                authRoot.navigate(router.ONBOARDING_SCREEN);
              }
            }}>
            {contentIntro.map(content => (
              <Block
                flex
                justifyEnd
                paddingBottom={60}
                key={content.id}
                gap={10}>
                <Text
                  fontSize={18}
                  semiBold
                  color={COLORS.yellow3}
                  uppercase
                  center>
                  {content.title}
                </Text>
                <Text
                  fontSize={14}
                  light
                  color={COLORS.white}
                  numberOfLines={2}
                  center
                  marginHorizontal={29}>
                  {content.subTitle}
                </Text>
              </Block>
            ))}
          </Swiper>
          <Block justifyCenter alignCenter>
            <Pressable
              onPress={() => authRoot.navigate(router.ONBOARDING_SCREEN)}
              width={88}
              height={29}
              radius={15}
              backgroundColor={COLORS.black2}
              justifyCenter
              alignCenter>
              <Text fontSize={14} light color={COLORS.yellow3}>
                Bỏ qua
              </Text>
            </Pressable>
          </Block>
        </Block>
      </Image>
    </Block>
  );
}

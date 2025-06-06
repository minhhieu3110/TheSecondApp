import {image} from '@assets';
import {Block, Image, Pressable, Text, StatusBar} from '@components';
import {height, width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {authRoot} from 'navigation/navigationRef';
import {ImageBackground} from 'react-native';
import AppIntro from 'react-native-app-intro-slider';
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
      <Block gap={10} borderWidth={1} backgroundColor={COLORS.white}>
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
  const {top, bottom} = useSafeAreaInsets();
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Image
        source={image.image_intro_1}
        width={width}
        height={'100%'}
        resizeMode="stretch">
        <StatusBar />
        <Block flex justifyEnd paddingBottom={bottom + 32}>
          <AppIntro
            data={contentIntro}
            renderItem={renderItem}
            dotStyle={{
              width: 8,
              height: 8,
              backgroundColor: COLORS.Yellow3_40,
              marginTop: 29,
            }}
            activeDotStyle={{
              width: 8,
              height: 8,
              marginTop: 29,
              backgroundColor: COLORS.yellow3,
            }}
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'flex-end',
            }}
            nextLabel={false}
            doneLabel={false}
          />
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

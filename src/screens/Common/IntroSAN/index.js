import {image} from '@assets';
import {Block, Image, Pressable, Text, Carousel} from '@components';
import {height, width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {authRoot} from 'navigation/navigationRef';
import AppIntro from 'react-native-app-intro-slider';
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
      <Block width={width - 24} height={106}>
        <Text fontSize={18} semiBold color={COLORS.yellow3} uppercase center>
          {item.title}
        </Text>
        <Text
          fontSize={14}
          light
          color={COLORS.white}
          numberOfLines={2}
          center
          marginTop={10}
          marginHorizontal={29}>
          {item.subTitle}
        </Text>
      </Block>
    );
  };
  return (
    <Block flex alignCenter>
      <Block width={width} height={height}>
        <Image
          source={image.image_intro_1}
          width={'100%'}
          height={'100%'}
          resizeMode
        />
      </Block>
      <Block absolute bottom={121} left={12} width={width - 24} height={106}>
        <AppIntro
          data={contentIntro}
          renderItem={renderItem}
          onDone={false}
          dotStyle={{
            width: 8,
            height: 8,
            backgroundColor: COLORS.Yellow3_40,
            marginTop: 59,
          }}
          activeDotStyle={{
            width: 8,
            height: 8,
            backgroundColor: COLORS.yellow3,
            marginTop: 59,
          }}
          nextLabel={false}
          doneLabel={false}
        />
      </Block>
      <Pressable
        onPress={() => authRoot.navigate(router.ONBOARDING_SCREEN)}
        backgroundColor={COLORS.black2}
        absolute
        bottom={62}
        radius={15}
        justifyCenter
        alignCenter
        width={88}
        height={29}>
        <Text fontSize={14} light color={COLORS.yellow3}>
          Bỏ qua
        </Text>
      </Pressable>
    </Block>
  );
}

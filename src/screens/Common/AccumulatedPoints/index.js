import {icon, image} from '@assets';
import {
  Block,
  HeaderTitle,
  Image,
  Pressable,
  StatusBar,
  Text,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {bottomRoot, commonRoot} from 'navigation/navigationRef';
import {useState} from 'react';
import {ScrollView} from 'react-native';
import ReceivePoint from './ReceivePoint';
import UsedPoint from './UsedPoint';
import {useSelector} from 'react-redux';
export default function AccumulatedPoint() {
  const [visibleReceivePoint, setVisibleReceivePoint] = useState(true);
  const [visibleUsedPoint, setVisibleUsedPoint] = useState(false);
  const handleReceive = () => {
    setVisibleReceivePoint(true);
    setVisibleUsedPoint(false);
  };
  const handleUsed = () => {
    setVisibleReceivePoint(false);
    setVisibleUsedPoint(true);
  };
  const userInfo = useSelector(state => state.getUserInfo?.data || []);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <StatusBar />
      <Block
        width={width}
        height={215}
        backgroundColor={COLORS.white}
        alignCenter>
        <HeaderTitle
          background
          screenName={router.PROFILE_SCREEN}
          root={bottomRoot}
          title={'Điểm tích luỹ'}
          colorIcon={COLORS.white}
          colorText={COLORS.white}
        />
        <Image
          source={image.image_header_balance}
          width={'100%'}
          height={'100%'}
          resizeMode="cover"
        />
        <Block absolute zIndex={10} top={74} alignCenter>
          <Text fontSize={40} bold color={COLORS.white}>
            {userInfo?.point} điểm
          </Text>
          <Text fontSize={14} regular color={COLORS.gray11}>
            Điểm tích luỹ
          </Text>
        </Block>
      </Block>
      <Block
        width={width - 24}
        height={67.33}
        radius={15}
        marginLeft={12}
        marginTop={-33.7}
        row
        spaceBetween>
        <Pressable
          onPress={handleReceive}
          width={(width - 24) / 2 - 5}
          backgroundColor={visibleReceivePoint ? COLORS.yellow3 : COLORS.white}
          radius={8}
          row
          alignCenter>
          <Block width={44} height={44} marginLeft={18}>
            <Image
              source={icon.icon_receive_point}
              width={'100%'}
              height={'100%'}
              resizeMode="contain"
            />
          </Block>
          <Text fontSize={15} regular color={COLORS.textColor} marginLeft={18}>
            Đã nhận
          </Text>
        </Pressable>
        <Pressable
          onPress={handleUsed}
          width={(width - 24) / 2 - 5}
          backgroundColor={visibleUsedPoint ? COLORS.yellow3 : COLORS.white}
          radius={8}
          row
          alignCenter>
          <Block width={44} height={44} marginLeft={18}>
            <Image
              source={icon.icon_used_point}
              width={'100%'}
              height={'100%'}
              resizeMode="contain"
            />
          </Block>
          <Text fontSize={15} regular color={COLORS.textColor} marginLeft={18}>
            Đã sử dụng
          </Text>
        </Pressable>
      </Block>
      {visibleReceivePoint && <ReceivePoint />}
      {visibleUsedPoint && <UsedPoint />}
    </Block>
  );
}

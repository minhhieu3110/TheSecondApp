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
      <Image
        source={image.image_header_balance}
        width={width}
        height={215}
        resizeMode="cover">
        <HeaderTitle
          title={'Điểm tích luỹ'}
          colorText={COLORS.white}
          colorIcon={COLORS.white}
          background={COLORS.transparent}
          root={bottomRoot}
          screenName={router.PROFILE_SCREEN}
        />
        <Block flex justifyEnd paddingBottom={75} alignCenter>
          <Text fontSize={40} bold color={COLORS.white}>
            {userInfo?.point + ' điểm'}
          </Text>
          <Text marginTop={11} fontSize={14} regular color={COLORS.white}>
            Điểm tích luỹ
          </Text>
        </Block>
      </Image>
      <Block
        marginHorizontal={12}
        marginTop={-33.76}
        height={67.33}
        row
        spaceBetween>
        <Pressable
          onPress={handleReceive}
          width={'48.5%'}
          backgroundColor={visibleReceivePoint ? COLORS.yellow3 : COLORS.white}
          radius={8}
          alignCenter
          rowCenter
          paddingHorizontal={18}>
          <Image source={icon.icon_receive_point} width={44} height={44} />
          <Text paddingLeft={18} fontSize={15} regular color={COLORS.black2}>
            Đã nhận
          </Text>
        </Pressable>
        <Pressable
          onPress={handleUsed}
          width={'48.5%'}
          backgroundColor={visibleUsedPoint ? COLORS.yellow3 : COLORS.white}
          radius={8}
          alignCenter
          rowCenter
          paddingHorizontal={18}>
          <Image source={icon.icon_used_point} width={44} height={44} />
          <Text paddingLeft={18} fontSize={15} regular color={COLORS.black2}>
            Đã sử dụng
          </Text>
        </Pressable>
      </Block>
      {visibleReceivePoint && <ReceivePoint />}
      {visibleUsedPoint && <UsedPoint />}
    </Block>
  );
}

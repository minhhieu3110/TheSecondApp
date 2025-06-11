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
          title={'Điểm tích lũy'}
          background={COLORS.transparent}
          colorText={COLORS.white}
          colorIcon={COLORS.white}
          screenName={router.PROFILE_SCREEN}
          root={bottomRoot}
        />
        <Block flex justifyEnd paddingBottom={73} alignCenter>
          <Block gap={8}>
            <Text fontSize={40} bold color={COLORS.white}>
              {userInfo?.point + ' điểm'}
            </Text>
            <Text fontSize={14} regular color={COLORS.white} center>
              Điểm tích lũy
            </Text>
          </Block>
        </Block>
      </Image>
      <Block
        marginHorizontal={12}
        height={67.33}
        row
        spaceBetween
        marginTop={-33.665}>
        <Pressable
          onPress={handleReceive}
          width={'48.5%'}
          backgroundColor={visibleReceivePoint ? COLORS.yellow3 : COLORS.white}
          radius={8}
          alignCenter
          paddingHorizontal={18}
          rowCenter
          gap={18}>
          <Image source={icon.icon_receive_point} width={40} height={40} />
          <Text fontSize={15} regular color={COLORS.black2}>
            Đã nhận
          </Text>
        </Pressable>
        <Pressable
          onPress={handleUsed}
          width={'48.5%'}
          backgroundColor={visibleUsedPoint ? COLORS.yellow3 : COLORS.white}
          radius={8}
          alignCenter
          paddingHorizontal={18}
          rowCenter
          gap={18}>
          <Image source={icon.icon_used_point} width={40} height={40} />
          <Text fontSize={15} regular color={COLORS.black2}>
            Đã sử dụng
          </Text>
        </Pressable>
      </Block>
      {visibleReceivePoint && <ReceivePoint />}
      {visibleUsedPoint && <UsedPoint />}
    </Block>
  );
}

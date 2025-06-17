import {icon} from '@assets';
import {Block, HeaderTitle, Icon, Image, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function HeaderChooseTime({titleAddress, address}) {
  return (
    <Block
      width={width}
      height={173}
      backgroundColor={COLORS.red4}
      paddingBottom={15}>
      <Block>
        <HeaderTitle
          canGoBack
          absolute={false}
          background={COLORS.white2}
          title={'Chọn thời gian làm việc'}
          colorIcon={COLORS.white}
          colorText={COLORS.white}
        />
      </Block>
      <Block
        marginHorizontal={12}
        paddingBottom={19}
        marginTop={2}
        backgroundColor={COLORS.solidColorRed}
        radius={8}>
        <Block marginTop={12} rowCenter spaceBetween paddingLeft={10}>
          <Block rowCenter>
            <Image
              source={icon.icon_position_address_work}
              width={25}
              height={25}
            />
            <Text fontSize={15} medium color={COLORS.white} marginLeft={4}>
              {titleAddress}
            </Text>
          </Block>
          <Icon
            IconType={MaterialIcons}
            iconName={'keyboard-arrow-right'}
            iconColor={COLORS.yellow3}
            iconSize={20}
          />
        </Block>
        <Text
          paddingLeft={39}
          marginTop={9}
          fontSize={14}
          regular
          color={COLORS.white}
          numberOfLines={2}>
          {address}
        </Text>
      </Block>
    </Block>
  );
}

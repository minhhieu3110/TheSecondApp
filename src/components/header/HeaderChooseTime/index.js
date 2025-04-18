import {icon} from '@assets';
import {Block, HeaderTitle, Icon, Image, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function HeaderChooseTime({address}) {
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
        width={width - 24}
        marginHorizontal={12}
        paddingBottom={19}
        marginTop={2}
        backgroundColor={COLORS.solidColorRed}
        radius={8}>
        <Block marginTop={12} marginLeft={10} row alignCenter>
          <Image
            source={icon.icon_position_address_work}
            width={25}
            height={25}
          />
          <Text fontSize={15} medium color={COLORS.white} marginLeft={4}>
            Công ty
          </Text>
        </Block>
        <Text
          marginLeft={39}
          marginTop={9}
          fontSize={14}
          regular
          color={COLORS.white}
          numberOfLines={2}>
          {address}
        </Text>
        <Block absolute top={15} right={3}>
          <Icon
            IconType={MaterialIcons}
            iconName={'keyboard-arrow-right'}
            iconColor={COLORS.yellow3}
            iconSize={20}
          />
        </Block>
      </Block>
    </Block>
  );
}

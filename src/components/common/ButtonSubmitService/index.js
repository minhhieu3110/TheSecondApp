import {Pressable, Icon, Block, Text} from '@components';
import {COLORS} from '@theme';
import RadialGradient from 'react-native-radial-gradient';
import {width} from '@responsive';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const ButtonSubmitService = ({
  titleTop,
  titleBottom,
  onPress,
  disable = false,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disable}
      absolute
      bottom={0}
      backgroundColor={COLORS.white}
      height={72}
      width={width}>
      <Block marginVertical={12} marginHorizontal={12} rowCenter spaceBetween>
        <Block marginBottom={5}>
          <Text fontSize={16} semiBold color={COLORS.black6} numberOfLines={1}>
            {titleTop}
          </Text>
          <Text marginTop={10} fontSize={14} regular color={COLORS.placeholder}>
            {titleBottom}
          </Text>
        </Block>
        <Block width={48} height={48} radius={5} overflow={'hidden'}>
          <RadialGradient
            style={{
              width: 48,
              height: 48,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            colors={COLORS.gradient5}>
            <Icon
              IconType={MaterialIcons}
              iconName={'keyboard-arrow-right'}
              iconColor={COLORS.white}
              iconSize={30}
            />
          </RadialGradient>
        </Block>
      </Block>
    </Pressable>
  );
};
export default ButtonSubmitService;

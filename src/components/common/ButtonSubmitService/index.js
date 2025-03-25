import {Pressable, Icon, Block, Text} from '@components';
import {COLORS} from '@theme';
import RadialGradient from 'react-native-radial-gradient';
import {width} from '@responsive';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const ButtonSubmitService = ({titleTop, titleBottom, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      absolute
      bottom={0}
      backgroundColor={COLORS.white}
      height={72}
      width={width}>
      <Block marginVertical={12} marginHorizontal={12} justifyCenter>
        <Block>
          <Text fontSize={16} semiBold color={COLORS.black6}>
            {titleTop}
          </Text>
          <Text marginTop={10} fontSize={14} regular color={COLORS.placeholder}>
            {titleBottom}
          </Text>
        </Block>
        <Block
          width={48}
          height={48}
          absolute
          right={0}
          radius={8}
          overflow={'hidden'}>
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

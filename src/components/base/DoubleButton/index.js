import {width} from '@responsive';
import Block from '../Block';
import Pressable from '../Pressable';
import {COLORS} from '@theme';
import Text from '../Text';

const DoubleButton = ({
  title1 = '',
  title2 = '',
  onPress1,
  onPress2,
  loading,
  disabled,
  numberOfLines = 1,
  textProps,
  ...containerProps
}) => {
  return (
    <Block alignCenter width={width - 24} row spaceBetween>
      <Pressable
        onPress={onPress1}
        width={(width - 24) / 2 - 5}
        height={48}
        alignCenter
        justifyCenter
        radius={8}
        borderColor={COLORS.red4}
        borderWidth={1}
        backgroundColor={COLORS.white}>
        <Text fontSize={15} regular color={COLORS.red4}>
          {title1}
        </Text>
      </Pressable>
      <Pressable
        onPress={onPress2}
        width={(width - 24) / 2 - 5}
        height={48}
        alignCenter
        justifyCenter
        radius={8}
        borderColor={COLORS.red4}
        backgroundColor={COLORS.red4}>
        <Text fontSize={15} regular color={COLORS.white}>
          {title2}
        </Text>
      </Pressable>
    </Block>
  );
};
export default DoubleButton;

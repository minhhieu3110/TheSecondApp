import {Block, Pressable, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import React from 'react';
import {ActivityIndicator} from 'react-native';

const Button = ({
  title = '',
  onPress,
  loading,
  disabled,
  numberOfLines = 1,
  textProps,
  ...containerProps
}) => {
  return (
    <Block
      backgroundColor={COLORS.white}
      absolute
      bottom={0}
      width={width}
      height={72}
      justifyCenter>
      <Pressable
        onPress={onPress}
        backgroundColor={COLORS.red4}
        paddingVertical={10}
        alignCenter
        justifyCenter
        marginHorizontal={15}
        radius={5}
        disabled={loading || disabled}
        {...containerProps}>
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text numberOfLines={numberOfLines} color="white" {...textProps}>
            {title}
          </Text>
        )}
      </Pressable>
    </Block>
  );
};

export default Button;
